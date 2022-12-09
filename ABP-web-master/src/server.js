const functions = require('firebase-functions');
const admin = require("firebase-admin");
const app = require("express")();

admin.initializeApp();
const dbUsuarios = admin.firestore().collection("Usuarios");

app.get("/usuarios", function (request, response) {
  dbUsuarios.get().then(function (docs) {
        let usuarios = [];
        docs.forEach(function (doc) {
          usuarios = [...usuarios,{
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
          }];
        })
        response.json(usuarios);
    });
});

app.post("/login", function (request, response) {
    dbUsuarios.get().then(function (docs) {
        let usu = {};
        usu = docs.find(x => x.data().email === request.body.email && x.data().senha === request.body.senha)
        response.json(usu);
    });
  });


app.post("/usuarios", function (request, response) {
  dbUsuarios.add({ 
        senha: request.body.senha,
        email: request.body.email,
        nome: request.body.nome,
        admin: false
    })
    .then(function () {
      response.json({ general: "Works" });
    });
});

const dbPontos = admin.firestore().collection("Pontos");

app.post("/pontos", function (request, response){
    dbPontos.add({
        dataHora: new Date(),
        anulado: false,
        idusuario: request.body.idUsuario
    }).then(function () {
      response.json({ general: "Works" });
    });

});

app.get("/pontos", function (request, response){
    dbUsuarios.get().then(function (docs){
        let usuarios = [];
        docs.forEach(function (doc) {
            usuarios = [...usuarios,{
              id: doc.id,
              nome: doc.data().nome,
              email: doc.data().email
            }];
        }); 

        dbPontos.get().then(function (pdocs){
            let pontos = [];
            pdocs.forEach(function (doc) {
                pontos = [...pontos,{
                    id: doc.id,
                    dataHora: doc.data().dataHora,
                    anulado: doc.data().anulado,
                    nome: usuarios.find(x => x.id === doc.data().idusuario),
                    idusuario: doc.data().idusuario
                }];
            });
            response.json(pontos);
        });
    });
});

exports.api = functions.https.onRequest(app);


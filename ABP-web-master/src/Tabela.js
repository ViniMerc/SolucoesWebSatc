import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import ParticlesBg from 'particles-bg';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import { lightGreen } from '@mui/material/colors';
import Home from './pages/Home'
import ListItem from './components/ListItem'
import NewTaskInput from './components/NewTaskInput'

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: blue,
  },
});

export default function SignIn() {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({id: tasks.length, value: task});
    setTasks(itensCopy);
  }

  function updateTask({target}, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }
  
  const[visivel, setVisivel] = React.useState(true);
  return (<>
    {!visivel && <Home/>}
    {visivel &&
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ParticlesBg type="cobweb" bg={true} num={100}  color="#8bc34a" />
        <Box bgcolor= "#f1f1f1" borderRadius={5} padding={4} boxShadow={2}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            V
          </Avatar>
          <Typography component="h1" variant="h5">
            Dashboard
          </Typography>
          <Typography component="h2" variant="h6" mt={3}>
            Cadastre seus horários de entrada
          </Typography>
          <Box bgcolor= "#f1f1f1" boxShadow={0} component={Paper} className="App-header" padding={2}>
          <NewTaskInput onSubmit={addNewTask} />
          {tasks.map(({id, value}, index) => (
          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
          ))}
          </Box>        
          <Box component="form" noValidate sx={{ mt: 1 }}>              
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              // eslint-disable-next-line react/jsx-no-undef
              onClick={() => {setVisivel(x => !x)}}> Voltar para página inicial </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  }</>);
}
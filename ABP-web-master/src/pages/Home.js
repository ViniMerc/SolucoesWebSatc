import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cadastro from './Cadastro';
import '@fontsource/roboto/400.css';
import { lightGreen } from '@mui/material/colors';
import ParticlesBg from 'particles-bg'

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

export default function HomePage() {
  const[visivel, setVisivel] = React.useState(true);
  return (<>
    {!visivel && <Cadastro/>}
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
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Bem vindo ao ponto digital!
          </Typography>
          <Typography component="h2" variant="h6" mt={3}>
            Cadastre-se para usar o Ponto Web
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Button 
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // eslint-disable-next-line react/jsx-no-undef
              onClick={() => {setVisivel(x => !x)}}
            >Cadastro
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
}</>);
}

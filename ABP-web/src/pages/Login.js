import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabela from '../Tabela';
import { lightGreen } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import ParticlesBg from 'particles-bg' 

const theme = createTheme({
  palette: {
    primary: lightGreen,
    secondary: grey,
  },
});

export default function SignIn() {
 const[visivel, setVisivel] = React.useState(true);
  return (<>
    {!visivel && <Tabela/>}
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
            Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // eslint-disable-next-line react/jsx-no-undef
              onClick={() => {setVisivel(x => !x)}}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>}
  </> );
}
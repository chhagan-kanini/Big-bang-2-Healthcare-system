import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

function NavigateToPageBasedOnRole(token, navigate) {
  console.log("Inside navigate function");
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('decoded_token', JSON.stringify(decodedToken));

  if (decodedToken && decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === 'Doctor') {
    navigate('/displaypatient');
  }
  if (decodedToken && decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === 'Patient') {
    navigate('/displaydoctor');
  }
  if (decodedToken && decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] === 'Admin') {
    navigate('/admin');
  }
};

const defaultTheme = createTheme();

function Login() {
  const [error_messages, setErrorMessages] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (!email) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, email: 'Please enter your email address.' }));
      return;
    }

    if (!password) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, password: 'Please enter your password.' }));
      return;
    }

    const url = 'https://localhost:7174/api/Token';
    const data_token = {
      userId: 0,
      userFirstName: 'string',
      userLastName: 'string',
      userEmail: email,
      password: password,
      role: 'string',
      contactNumber: 'string',
      gender: 'string',
      address: 'string',
      reason: 'string',
      qualification: 'string',
      specialization: 'string',
      experience: 'string',
      hospital: 'string'
    };

    try {
      const response = await axios.post(url, data_token);
      const token = response.data.token;

      NavigateToPageBasedOnRole(token, navigate);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessages({ email: 'Invalid credentials. Please try again.', password: '' });
      } else {
        setErrorMessages({ email: '', password: 'An error occurred. Please try again later.' });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={Boolean(error_messages.email)}
              helperText={error_messages.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={Boolean(error_messages.password)}
              helperText={error_messages.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register here."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;

import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Button,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user_role, setRole] = useState("");
  const [user_gender, setGender] = useState(null);
  const [error, setError] = useState();
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const url = "https://localhost:7174/Register";
    const data_token = {
      userId: 0,
      userFirstName: data.get("firstname"),
      userLastName: data.get("lastname"),
      userEmail: data.get("email"),
      password: data.get("password"),
      role: user_role,
      contactNumber: data.get("Phonenumber"),
      gender: user_gender,
      address: data.get("address"),
      reason: data.get("reason"),
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };
    try {
      console.log("Inside try block");
      console.log(data_token);
      const response = await axios.post(url, data_token);
      // const token = response.data.token;
      // Save the token in your component state or local storage
      // For example, this.setState({ token: token }) or localStorage.setItem('token', token)

      // Call a function to navigate to the appropriate page based on the role
      navigate("/login");
    } catch (error) {
      // Handle any errors
      if (error.response && error.response.status === 400) {
        // Unauthorized: Invalid credentials
        // Display an error message on the website
        setError("User already exists"); // Assuming you have an 'error' state variable to store the error message
      } else {
        // Other error occurred
        console.log(error);
        setError("An error occurred. Please try again later.");
      }
    }
  };
  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  
  const handleGenderChange = (event) => {
    setGender(event.target.value || null);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="Phonenumber"
              label="Phone Number"
              name="Phonenumber"
              autoComplete="Phonenumber"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Role
              </InputLabel>
              <NativeSelect
                inputProps={{
                  name: "role",
                  id: "uncontrolled-native",
                }}
                value={user_role}
                onChange={handleRoleChange}
              >
                <option value="">Select role</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </NativeSelect>
            </FormControl>
            {user_role === "Doctor" && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="qualification"
                  label="Qualification"
                  name="qualification"
                  autoComplete="qualification"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="specialization"
                  label="Specialization"
                  name="specialization"
                  autoComplete="specialization"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="experience"
                  label="Experience"
                  name="experience"
                  autoComplete="experience"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="hospital"
                  label="Hospital"
                  name="hospital"
                  autoComplete="Hospital"
                  autoFocus
                />
              </>
            )}
            {user_role === "Patient" && (
              <>
                <FormControl component="fieldset" sx={{ mt: 1 }}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={user_gender}
                    onChange={handleGenderChange}
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="reason"
                  label="Reason"
                  name="reason"
                  autoComplete="reason"
                  autoFocus
                />
              </>
            )}

            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            {error && (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mt={8} mb={4}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Register;

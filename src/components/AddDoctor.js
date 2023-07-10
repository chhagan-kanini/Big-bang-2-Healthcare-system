import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  CardContent,
  Container,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";

function AddDoctor() {
  const [error, setError] = useState(null);

  const handleAddDoctorSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const token = sessionStorage.getItem("token");
    const url = "https://localhost:7174/api/Admin";
    const data_token = {
      userId: 0,
      userFirstName: data.get("firstname"),
      userLastName: data.get("lastname"),
      userEmail: data.get("email"),
      password: data.get("password"),
      role: "Doctor",
      contactNumber: data.get("Phonenumber"),
      gender: null,
      address: null,
      reason: null,
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };

    try {
      const response = await axios.post(url, data_token, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setError("Doctor added successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Doctor already exists");
      }
      if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        setError("You do not have permission to view the doctor details");
      }
    }
  };

  return (
    <Container maxWidth="sm">
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="h6" component="h3" sx={{ marginBottom: "10px" }}>
          Add Doctor
        </Typography>

        <Card variant="outlined">
          <CardContent>
            <Box
              component="form"
              onSubmit={handleAddDoctorSubmit}
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Doctor
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default AddDoctor;

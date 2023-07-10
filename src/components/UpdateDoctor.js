import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";

function UpdateDoctor() {
  const [error, setError] = useState(null);

  const handleUpdateDoctorSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updateId = data.get("updateid");

    const url = `https://localhost:7174/api/Admin/doctor/${updateId}`;
    const dataToken = {
      firstName: data.get("firstname"),
      lastName: data.get("lastname"),
      email: data.get("email"),
      contactNumber: data.get("Phonenumber"),
      qualification: data.get("qualification"),
      specialization: data.get("specialization"),
      experience: data.get("experience"),
      hospital: data.get("hospital"),
    };

    try {
      const response = await axios.put(url, dataToken);
      if (response.status === 200) {
        setError("Doctor details updated successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Doctor does not exist");
      } else {
        setError("An error occurred while updating the doctor");
      }
    }
  };

  return (
    <Box sx={{ mt: 4, width: "50%", margin: "0 auto", backgroundColor: "#f2f2f2" }}>
      {error && <Alert severity="error">{error}</Alert>}
      <Typography variant="subtitle2" component="h3" sx={{ marginBottom: "10px" }}>
        Update Doctor Details
      </Typography>

      <Box component="form" onSubmit={handleUpdateDoctorSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="updateid"
          label="Doctor ID"
          name="updateid"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstname"
          autoComplete="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastname"
          autoComplete="lastname"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="Phonenumber"
          label="Phone Number"
          name="Phonenumber"
          autoComplete="Phonenumber"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="qualification"
          label="Qualification"
          name="qualification"
          autoComplete="qualification"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="specialization"
          label="Specialization"
          name="specialization"
          autoComplete="specialization"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="experience"
          label="Experience"
          name="experience"
          autoComplete="experience"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="hospital"
          label="Hospital"
          name="hospital"
          autoComplete="Hospital"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Update Doctor
        </Button>
      </Box>
    </Box>
  );
}

export default UpdateDoctor;

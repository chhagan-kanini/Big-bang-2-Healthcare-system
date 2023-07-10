import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import axios from "axios";

function GetDoctorById() {
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const [get_id, setGetId] = useState("");

  const fetchDoctor = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7174/api/Admin/${get_id}`
      );
      const doctorData = response.data;
      setDoctor(doctorData);
      setError(null);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Doctor does not exist!");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchDoctor();
  };

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="subtitle2" component="h3" sx={{ marginBottom: "10px" }}>
          Get Doctor By Id
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="getbyid"
            label="Doctor ID"
            name="getbyid"
            autoComplete="name"
            autoFocus
            value={get_id}
            onChange={(e) => setGetId(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Get Doctor
          </Button>
        </Box>
      </Box>
      <Box>
        {doctor ? (
          <div>
            <h2>
              {doctor.firstName} {doctor.lastName}
            </h2>
            <p>Email: {doctor.email}</p>
            <p>Contact Number: {doctor.contactNumber}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Experience: {doctor.experience}</p>
            <p>Qualification: {doctor.qualification}</p>
            <p>Hospital: {doctor.hospital}</p>
          </div>
        ) : (
          <p>Loading doctor details...</p>
        )}
      </Box>
    </div>
  );
}

export default GetDoctorById;

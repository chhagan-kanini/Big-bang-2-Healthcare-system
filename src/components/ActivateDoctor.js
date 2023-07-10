import React, { useState } from "react";
import { Box, Typography, Button, TextField, Alert } from "@mui/material";
import axios from "axios";
import ConsultedDoctors from "./ConsultedDoctors";

function ActivateDoctor() {
  const [activateError, setActivateError] = useState(null);
  const [deactivateError, setDeactivateError] = useState(null);
  const [activateDoctorId, setActivateDoctorId] = useState("");
  const [deactivateDoctorId, setDeactivateDoctorId] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 

 



  const handleActivateClick = async (event) => {
    event.preventDefault();
    const url = `https://localhost:7174/api/Admin/doctor/${activateDoctorId}/setActive`;

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setActivateError(null);
        setActivateDoctorId("");
        setDeactivateError(null);
        setDeactivateDoctorId("");
        setSuccessMessage("Doctor activated successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setActivateError("Doctor does not exist!");
      } else if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        setActivateError("You do not have permission to activate the doctor.");
      }
      setSuccessMessage("");
    }
  };

  const handleDeactivateClick = async (event) => {
    event.preventDefault();
    const url = `https://localhost:7174/api/Admin/doctor/${deactivateDoctorId}/setInactive`;

    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.post(url, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setDeactivateError(null);
        setDeactivateDoctorId("");
        setActivateError(null);
        setActivateDoctorId("");
        setSuccessMessage("Doctor deactivated successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setDeactivateError("Doctor does not exist!");
      } else if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        setDeactivateError("You do not have permission to deactivate the doctor.");
      }
      setSuccessMessage("");
    }
  };

  return (
    <div>
      
      {activateError && <Alert severity="error">{activateError}</Alert>}
      {deactivateError && <Alert severity="error">{deactivateError}</Alert>}
      {successMessage && <Alert severity="success">{successMessage}</Alert>}
      <Box sx={{ marginTop: "20px" }}>
        <Typography variant="subtitle2" component="h3" sx={{ marginBottom: "10px" }}>
          Activate Doctor
        </Typography>

        <Box component="form" onSubmit={handleActivateClick} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="doctoractivateid"
            label="Doctor ID"
            name="doctoractivateid"
            autoComplete="name"
            autoFocus
            value={activateDoctorId}
            onChange={(event) => setActivateDoctorId(event.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Activate Doctor
          </Button>
        </Box>
      </Box>

      
      
    </div>
  );
}

export default ActivateDoctor;
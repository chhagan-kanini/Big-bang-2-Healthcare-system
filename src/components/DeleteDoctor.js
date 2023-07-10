import React, { useState } from "react";
import { Box, Typography, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import axios from "axios";
import Alert from "@mui/material/Alert";

function DeleteDoctor() {
  const [error, setError] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteDoctorSubmit = async (event) => {
    event.preventDefault();

    if (!confirmDelete) {
      setError("Please confirm the deletion by checking the checkbox.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const deleteId = data.get("deleteid");
    const token = sessionStorage.getItem("token");
    const url = `https://localhost:7174/api/Admin/${deleteId}`;

    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setError("Doctor deleted successfully");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Doctor already deleted");
      } else if (
        error.response &&
        (error.response.status === 403 || error.response.status === 401)
      ) {
        setError("You do not have permission to delete the doctor details");
      } else {
        setError("An error occurred while deleting the doctor");
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setConfirmDelete(event.target.checked);
    setError(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          width: "400px",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h5" component="h1" sx={{ marginBottom: "20px", textAlign: "center" }}>
          Delete Doctor
        </Typography>

        {error && <Alert severity="error" sx={{ marginBottom: "20px" }}>{error}</Alert>}

        <form onSubmit={handleDeleteDoctorSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="deleteid"
            label="Doctor ID"
            name="deleteid"
            autoComplete="name"
          />

          <FormControlLabel
            control={
              <Checkbox checked={confirmDelete} onChange={handleCheckboxChange} color="primary" />
            }
            label="I confirm that I want to delete this doctor."
            sx={{ marginTop: "10px" }}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ marginTop: "20px" }}>
            Delete Doctor
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default DeleteDoctor;

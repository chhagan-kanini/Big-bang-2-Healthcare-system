import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Make an API request to send the contact form data
      await axios.post("https://example.com/api/contact", formData);

      // Reset form fields and show success message
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    } catch (error) {
      setError("An error occurred while submitting the form. Please try again.");
    }
  };

  const handleSnackbarClose = () => {
    setSuccess(false);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto" }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Contact Us
      </Typography>

      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Name"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Email"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>

      {error && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {error}
        </Alert>
      )}

      <Snackbar open={success} autoHideDuration={5000} onClose={handleSnackbarClose} sx={{ marginTop: 2 }}>
        <Alert severity="success" onClose={handleSnackbarClose}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ContactPage;

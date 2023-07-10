import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import ConsultedDoctors from "./ConsultedDoctors";

function GetAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const response = await axios.get("https://localhost:7174/api/Admin/alldoctors", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDoctors(response.data);
      } catch (error) {
        setError("Error fetching doctor details");
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      
      
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      {error && (
        <Card variant="outlined" sx={{ width: 400 }}>
          <CardContent>
            <Typography color="error">{error}</Typography>
          </CardContent>
        </Card>
      )}

      {doctors.map((doctor) => (
        <Card variant="outlined" key={doctor.doctorId} sx={{ width: 400, mt: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ mb: 1 }}>
             {doctor.doctorId} {doctor.firstName} {doctor.lastName}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 1 }}>
              Contact Number: {doctor.contactNumber}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              E-Mail: {doctor.email}
              <br />
              Specialization: {doctor.specialization}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Experience: {doctor.experience}
              <br />
              Hospital: {doctor.hospital}
            </Typography>
            <Typography variant="body2">
              Qualification: {doctor.qualification}
            </Typography>

            <Typography variant="body3">
              status: {doctor.isActive ? "Active" : "Inactive"}
            </Typography>

          </CardContent>
        </Card>
        
      ))}
    </Box>
    </div>
  );
}

export default GetAllDoctors;

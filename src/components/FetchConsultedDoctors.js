import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TeacherCard from './DisplayPatient';
import DisplayPatient from './DisplayPatient';
import NewPatient from './NewPatient';
import ConsultedDoctors from './ConsultedDoctors';

function FetchConsultedDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const decodedToken = JSON.parse(sessionStorage.getItem('decoded_token'));
        const url_id = decodedToken['UserId'];

        const response = await fetch(`https://localhost:7174/api/Doctor/patient/consulteddoctors/${url_id}`);
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
        setDoctors(data);
        console.log(doctors);
      } catch (error) {
        if (error.message === 'Request failed with status: 400') {
          setError("You are a new patient. You do not have any consulted doctors.");
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    };

    fetchDoctors();
  }, []);

  if (error === 'You are new patient. You do not have any consulted doctors.') {
    return <p>{error}</p>;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {doctors.map((doctors) => (
        <ConsultedDoctors key={doctors.doctorId} parse_doctor={doctors} />
      ))}
    </Box>
  );
}

export default FetchConsultedDoctors;

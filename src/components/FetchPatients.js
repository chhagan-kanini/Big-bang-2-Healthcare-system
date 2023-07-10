import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TeacherCard from './DisplayPatient';
import DisplayPatient from './DisplayPatient';

function FetchPatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const decodedToken = JSON.parse(sessionStorage.getItem('decoded_token'));
        const url_id = decodedToken['Email'];

        const response = await fetch(`https://localhost:7174/doctor/${url_id}`);
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
        setPatients(data);
        console.log(patients);
      } catch (error) {
        if (error.message === 'Request failed with status: 400') {
          setError("You do not  have any patients right now.");
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    };

    fetchPatients();
  }, []);

  if (error === 'You do not  have any patients right now.') {
    return <p>{error}</p>;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {patients.map((patients) => (
        <DisplayPatient key={patients.patientId} patient={patients} />
      ))}
    </Box>
  );
}

export default FetchPatients;

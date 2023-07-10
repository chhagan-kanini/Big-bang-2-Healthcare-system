import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import NewPatient from './NewPatient';

function FetchAllDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');
  const [patientadderror, setPatientAddError] = useState('');

  const handleConsultClicktwo = async (doctorId) => {
    try {
      const decodedToken = JSON.parse(sessionStorage.getItem('decoded_token'));
      const url_id = decodedToken['UserId'];
      console.log(url_id);
        console.log("Inside try block");
        console.log(doctorId);
      const response = await fetch(`https://localhost:7174/api/Doctor/${url_id}/${doctorId}`,{
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      if (error.message === 'Request failed with status: 400') {
        setPatientAddError('Error while adding patient');
        console.log(patientadderror);
      }
    }
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const decodedToken = JSON.parse(sessionStorage.getItem('decoded_token'));
        const url_id = decodedToken['UserId'];

        const response = await fetch(`https://localhost:7174/api/Doctor/patient/newpatient/${url_id}`);
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }

        const data = await response.json();
        console.log(data);
        setDoctors(data);
        console.log(doctors);
      } catch (error) {
        if (error.message === 'Request failed with status: 400') {
          setError('You are not a new patient');
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    };

    fetchDoctors();
  }, []);

  if (error === 'You are not a new patient') {
    return <p>{error}</p>;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {doctors.map((doctor) => (
        <NewPatient key={doctor.doctorId} parse_doctor={doctor} onConsultClick={handleConsultClicktwo} />
      ))}
    </Box>
  );
}

export default FetchAllDoctors;

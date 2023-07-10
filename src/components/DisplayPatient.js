import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DisplayPatient = ({ patient }) => {
  const bull = (
    <span style={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      •
    </span>
  );

  return (
    <div>
      <br></br>
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Patient Details
        </Typography>
        <Typography variant="h5" component="div">
          {patient.firstName}  {patient.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Gender: {patient.gender}
        </Typography>
        <Typography variant="body2">
          Contact Number: {patient.contactNumber}
          <br />
          Email: {patient.email}
        </Typography>
        <Typography variant="body2">
          Address: {patient.address}
          <br />
          Reason: {patient.reason}
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
};

export default DisplayPatient;

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FetchAllDoctors from './FetchAllDoctors';

const ConsultedDoctors = ({ parse_doctor }) => {
    console.log(parse_doctor);
  const bull = (
    <span style={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
      •
    </span>
  );
  const dotColor = parse_doctor.isActive ? 'green' : 'red';

  return (
    <div>
      <br></br>
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Consulted Doctor Details
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" component="div" style={{ marginRight: '5px' }}>
          {parse_doctor.firstName} {parse_doctor.lastName} 
        </Typography>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: dotColor }}></div>
        </div>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Contact Number: {parse_doctor.contactNumber}
        </Typography>
        <Typography variant="body2">
          E-Mail: {parse_doctor.email}
          <br />
          Specialization: {parse_doctor.specialization}
        </Typography>
        <Typography variant="body2">
          Experience: {parse_doctor.experience}
          <br />
          Hospital: {parse_doctor.hospital}
        </Typography>
        <Typography variant="body2">
          Qualification: {parse_doctor.qualification}
          <br/>
        </Typography>
        
        
      </CardContent>
      
    </Card>
    </div>
  );
};

export default ConsultedDoctors;

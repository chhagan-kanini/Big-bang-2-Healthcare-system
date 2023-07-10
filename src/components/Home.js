import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import doctorImage from '../images/doc.jpg';
import appointmentImage from '../images/bookap.jpg';

const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled(Typography)`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled(Typography)`
  font-size: 18px;
  margin-bottom: 32px;
  text-align: center;
`;

const CTA = styled(Typography)`
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
`;

const FeatureContainer = styled('div')`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 32px;
`;

const Feature = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  text-align: center;
`;

const FeatureImage = styled('img')`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to the Kanini Healthcare Organization</Title>
      <Description>Seamless communication between administrators, doctors, and patients</Description>
      <CTA>Log in or register to access medical services</CTA>
      <FeatureContainer>
        <Feature>
          <FeatureImage src={doctorImage} alt="Doctor Icon" />
          <Typography variant="h6">Find Doctors</Typography>
          <Typography variant="body1">Discover experienced doctors in various specialties.</Typography>
        </Feature>
        <Feature>
          <FeatureImage src={appointmentImage} alt="Appointment Icon" />
          <Typography variant="h6">Book Appointments</Typography>
          <Typography variant="body1">Easily schedule appointments with your preferred doctors.</Typography>
        </Feature>
      </FeatureContainer>
    </HomeContainer>
  );
}

export default Home;

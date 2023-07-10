import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
`;

const Subtitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
`;

const ButtonContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: #2196f3;

  &:hover {
    background-color: #1976d2;
  }
`;

function Admin() {
  return (
    <Box>
      <br />
      <Title>Admin's Page</Title>
      <StyledCard>
        <CardContent>
          <Subtitle>Doctor</Subtitle>
          <ButtonContainer>
            <StyledButton variant="contained" component={Link} to="/add-doctor">
              Add a Doctor
            </StyledButton>
            <StyledButton
              variant="contained"
              component={Link}
              to="/delete-doctor"
            >
              Delete a Doctor
            </StyledButton>
            <StyledButton
              variant="contained"
              component={Link}
              to="/update-doctor"
            >
              Update Doctor
            </StyledButton>
            <StyledButton
              variant="contained"
              component={Link}
              to="/getall-doctor"
            >
              Show Doctor Details
            </StyledButton>
            <StyledButton
              variant="contained"
              component={Link}
              to="/activate-doctor"
            >
              Activate Doctor
            </StyledButton>
            <StyledButton
              variant="contained"
              component={Link}
              to="/deactivate-doctor"
            >
              Deactivate Doctor
            </StyledButton>
          </ButtonContainer>
        </CardContent>
      </StyledCard>
    </Box>
  );
}

export default Admin;

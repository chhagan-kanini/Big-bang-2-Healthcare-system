import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-color: #003366;
`;

const LogoTypography = styled(Typography)`
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
`;

const NavLink = styled(Button)`
  color: #ffffff;
  text-transform: none;
  font-weight: 500;
  margin-right: 10px;

  &:hover {
    background-color: #002b4c;
  }
`;

function NavigationBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <LogoTypography variant="h6" component={Link} to="/" style={{ textDecoration: 'none' }}>
          Kanini Healthcare Management
        </LogoTypography>
        <Box sx={{ flexGrow: 1 }} />
        <NavLink component={Link} to="/home" startIcon={<HomeIcon />}>
          Home
        </NavLink>
        <NavLink component={Link} to="/register" startIcon={<SchoolIcon />}>
          Register
        </NavLink>
        <NavLink component={Link} to="/login" startIcon={<PersonIcon />}>
          Login
        </NavLink>
        <NavLink component={Link} to="/contact" startIcon={<person-rolodex />}>
          Contact
        </NavLink>

        <NavLink component={Link} to="/about" startIcon={<person-rolodex />}>
          About
        </NavLink>
        
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavigationBar;

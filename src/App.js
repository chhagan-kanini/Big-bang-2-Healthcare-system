import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DisplayPatient from './components/DisplayPatient';
import FetchPatients from './components/FetchPatients';
import FetchAllDoctors from './components/FetchAllDoctors';
import FetchConsultedDoctors from './components/FetchConsultedDoctors';
import NotConsultedDoctors from './components/NotConsultedDoctors';
import FetchNotConsultedDoctors from './components/FetchNotConsultedDoctors';
import Doctor from './components/Doctor';
import Admin from './components/Admin';
import AddDoctor from './components/AddDoctor';
import DeleteDoctor from './components/DeleteDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import GetAllDoctors from './components/GetAllDoctors';
import GetDoctorById from './components/GetDoctorById';
import ActivateDoctor from './components/ActivateDoctor';
import DeactivateDoctor from './components/DeactivateDoctor';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
      <Routes>
        <Route path="/home" element={<Home/>} />
          
         
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/displaypatient" element={<FetchPatients />} />
          <Route path="/displaydoctor" element={<Doctor />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/delete-doctor" element={<DeleteDoctor />} />
          <Route path="/update-doctor" element={<UpdateDoctor />} />
          <Route path="/getall-doctor" element={<GetAllDoctors />} />
          <Route path="/get-doctor-id" element={<GetDoctorById />} />
          <Route path="/activate-doctor" element={<ActivateDoctor />} />
          <Route path="/deactivate-doctor" element={<DeactivateDoctor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Container>
      
    </Router>
  );
}

export default App

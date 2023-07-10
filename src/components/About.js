import React from "react";
import { Box, Typography } from "@mui/material";

function AboutPage() {
  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontFamily: "Arial", mb: 4 }}>
        About Kanini Healthcare Management
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "Arial", mb: 3 }}>
        Kanini Healthcare Management is a leading healthcare organization committed to providing high-quality healthcare services to patients. With a team of dedicated healthcare professionals, we strive to deliver compassionate and personalized care to individuals and communities.
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "Arial", mb: 3 }}>
        Our mission is to improve the health and well-being of our patients by offering comprehensive medical services, advanced treatments, and innovative healthcare solutions. We believe in a patient-centric approach, ensuring that every individual receives the attention, respect, and support they deserve.
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "Arial", mb: 3 }}>
        At Kanini Healthcare Management, we offer a wide range of healthcare services, including primary care, specialized treatments, preventive care, diagnostics, and wellness programs. Our state-of-the-art facilities, modern technologies, and experienced medical professionals enable us to provide exceptional care across various medical disciplines.
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "Arial", mb: 3 }}>
        We are dedicated to continuous improvement and stay updated with the latest advancements in medical research and technology. By fostering a culture of learning and innovation, we strive to deliver the best possible outcomes for our patients.
      </Typography>

      <Typography variant="body1" sx={{ fontFamily: "Arial", mb: 3 }}>
        Whether you require routine medical services or specialized treatments, you can trust Kanini Healthcare Management to deliver comprehensive and compassionate care. We are committed to making a positive impact on the lives of our patients and the communities we serve.
      </Typography>
    </Box>
  );
}

export default AboutPage;

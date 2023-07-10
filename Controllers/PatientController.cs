using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace RoleBasedAuthentication3.Models
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class PatientController : ControllerBase
    {
        private readonly DPContext _context;

        public PatientController(DPContext context)
        {
            _context = context;
        }

        [HttpGet("doctor/{email}")]
        public IActionResult GetPatientsByDoctorEmail(string email)
        {
            // Find the doctor by email in the Doctor table
            var doctor = _context.Doctor_set.FirstOrDefault(d => d.Email == email);

            if (doctor == null)
            {
                return BadRequest("No doctor found for the specified email.");
            }

            var doctorId = doctor.DoctorId;

            var patients = _context.Patient_set
                .Where(p => p.DoctorID == doctorId)
                .ToList();

            if (!patients.Any())
            {
                return BadRequest("No patients found for the specified doctor ID.");
            }

            return Ok(patients);
        }

    }
}
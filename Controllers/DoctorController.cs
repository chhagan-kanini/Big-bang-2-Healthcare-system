using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAuthentication3.Models;

namespace RoleBasedAuthentication3.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {

        private readonly DPContext _context;

        public DoctorController(DPContext context)
        {
            _context = context;
        }
        [HttpGet("patient/newpatient/{patientId}")]
        public IActionResult GetDoctorsForNewPatient(int patientId)
        {
            var patient = _context.Patient_set.FirstOrDefault(p => p.PatientId == patientId);
            if (patient == null)
            {
                var doctors_all = _context.Doctor_set.ToList();
                return Ok(doctors_all);
            }
            else
            {
                return BadRequest("Not a new patient");
            }
        }
        [HttpGet("patient/consulteddoctors/{patientId}")]
        public IActionResult GetConsultedDoctors(int patientId)
        {
            var patient = _context.Patient_set.FirstOrDefault(p => p.PatientId == patientId);
            if (patient == null)
            {
                return BadRequest("New patient");
            }
            else
            {
                var doctors = _context.Doctor_set
             .Join(_context.Patient_set,
                 d => d.DoctorId,
                 p => p.DoctorID,
                 (d, p) => new { Doctor = d, PatientId = p.PatientId })
             .Where(x => x.PatientId == patientId)
             .Select(x => x.Doctor)
             .ToList();
                return Ok(doctors);
            }
        }

        [HttpGet("patient/notconsulteddoctors/{patientId}")]
        public IActionResult GetNotConsultedDoctors(int patientId)
        {
            var patient = _context.Patient_set.FirstOrDefault(p => p.PatientId == patientId);
            if (patient == null)
            {
                return BadRequest("New patient");
            }
            else
            {
                var doctors = _context.Doctor_set
                .Where(d => !_context.Patient_set.Any(p => p.DoctorID == d.DoctorId && p.PatientId == patientId))
                .ToList();
                if (doctors.Count == 0)
                {
                    return BadRequest("Patient has consulted  all doctors");
                }
                else
                {
                    return Ok(doctors);
                }
            }

            
            

           

            
        }
        
        [HttpPost("{patientId}/{doctorId}")]
        public IActionResult AddPatient(int patientId, int doctorId)
        {
            try
            {
                var user = _context.User_set.FirstOrDefault(u => u.UserId == patientId);
                if (user == null)
                {
                    return BadRequest("Invalid User");
                }

                var doctor = _context.Doctor_set.FirstOrDefault(d => d.DoctorId == doctorId);
                if (doctor == null)
                {
                    return BadRequest("Invalid Doctor");
                }

                var patient = new Patient
                {
                    PatientId = patientId,
                    FirstName = user.UserFirstName,
                    LastName = user.UserLastName,
                    ContactNumber = user.ContactNumber,
                    Email = user.UserEmail,
                    Address = user.Address,
                    Gender = user.Gender,
                    DoctorID = doctorId,
                    Reason = user.Reason
                };

                _context.Patient_set.Add(patient);
                _context.SaveChanges();

                return Ok(patient);
            }
            catch
            {
                return BadRequest("An error occurred while adding the patient.");
            }
        }

    }
}

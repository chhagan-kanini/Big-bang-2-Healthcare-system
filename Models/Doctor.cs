using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace RoleBasedAuthentication3.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

       
        public string? FirstName { get; set; }

     
        public string? LastName { get; set; }

        public string? ContactNumber { get; set; }

        public string? Email { get; set; }

        public string? Specialization { get; set; }

        public string? Experience { get; set; }

        public string? Hospital { get; set; }

        public string? Qualification { get; set; }

        public bool IsActive { get; set; } = false;







    }
}
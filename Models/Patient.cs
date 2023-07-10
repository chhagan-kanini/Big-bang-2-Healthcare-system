
using RoleBasedAuthentication3.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoleBasedAuthentication3.Models
{
    public class Patient
    {
        [Key]
        [Column(Order = 1)]
        public int PatientId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public string ContactNumber { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string Gender { get; set; }

       public string Reason { get; set; }    






        // Foreign key

        [Column(Order = 2)]
        [ForeignKey("Doctor")]
        public int? DoctorID { get; set; }

        // Navigation property
        public ICollection<Doctor> Doctors { get; set; }
    }
}
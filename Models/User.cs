using System.ComponentModel.DataAnnotations;

namespace RoleBasedAuthentication3.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string? UserFirstName { get; set; }
        public string? UserLastName { get; set; }

        public string? UserEmail { get; set; }

        public string? Password { get; set; }

        public string? Role { get; set; }

        public string? ContactNumber { get; set; }


        public string? Gender { get; set; }


        public string? Address { get; set; }

        public string? Reason { get; set; }

        public string? Qualification { get; set; }

        public string? Specialization { get; set; }

        public string? Experience { get; set; }

        public string? Hospital { get; set; }





    }
}
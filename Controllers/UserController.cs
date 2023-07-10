using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace RoleBasedAuthentication3.Models
{
    //[Route("api/[controller]")]
    //[ApiController]
    public class UserController : ControllerBase
    {
        private readonly DPContext _context;

        public UserController(DPContext context)
        {
            _context = context;
        }

        //    // GET: api/Admin
        //    [HttpGet]
        //    public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        //    {
        //        if (_context.Admins == null)
        //        {
        //            return NotFound();
        //        }
        //        return await _context.Admins.ToListAsync();
        //    }

        //    // GET: api/Admin/5
        //    [HttpGet("{id}")]
        //    public async Task<ActionResult<Admin>> GetAdminbyId(int id)
        //    {
        //        if (_context.Admins == null)
        //        {
        //            return NotFound();
        //        }
        //        var user = await _context.Admins.FindAsync(id);

        //        if (user == null)
        //        {
        //            return NotFound();
        //        }

        //        return user;
        //    }

        //    // PUT: api/Admin/5
        //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //    [HttpPut("{id}")]
        //    public async Task<IActionResult> PutUser(int id, Admin user)
        //    {
        //        if (id != user.UserId)
        //        {
        //            return BadRequest();
        //        }

        //        _context.Entry(user).State = EntityState.Modified;

        //        try
        //        {
        //            await _context.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!UserExists(id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return NoContent();
        //    }

        //    // POST: api/Admins
        //    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //    [HttpPost]
        //    public async Task<ActionResult<Admin>> PostUser(Admin user)
        //    {
        //        if (_context.Admins == null)
        //        {
        //            return Problem("Entity set 'ProCatContext.Users'  is null.");
        //        }
        //        _context.Admins.Add(user);
        //        await _context.SaveChangesAsync();

        //        var res = CreatedAtAction("GetUser", new { id = user.UserId }, user);
        //        return Ok(res);
        //    }

        //    // DELETE: api/Admins/5
        //    [HttpDelete("{id}")]
        //    public async Task<IActionResult> DeleteUser(int id)
        //    {
        //        if (_context.Admins == null)
        //        {
        //            return NotFound();
        //        }
        //        var user = await _context.Admins.FindAsync(id);
        //        if (user == null)
        //        {
        //            return NotFound();
        //        }

        //        _context.Admins.Remove(user);
        //        await _context.SaveChangesAsync();

        //        return NoContent();
        //    }

        //    private bool UserExists(int id)
        //    {
        //        return (_context.Admins?.Any(e => e.UserId == id)).GetValueOrDefault();
        //    }

        //}


        // POST: api/Student/Register
        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] User model)
        {
            // Check if the user already exists
            var existingUser = await _context.User_set.FirstOrDefaultAsync(a => a.UserEmail == model.UserEmail);
            if (existingUser != null)
            {
                return BadRequest("User with the same email already exists");
            }

            // Create a new Admin object with the provided information
            var admin = new User
            {
                UserFirstName = model.UserFirstName,
                UserLastName = model.UserLastName,
                UserEmail = model.UserEmail,
                Gender = model.Gender,
                ContactNumber = model.ContactNumber,
                Password = model.Password,
                Role = model.Role,
                Qualification = model.Qualification,
                Specialization=model.Specialization,
                Experience=model.Experience,
                Hospital=model.Hospital,
                Address=model.Address,
                Reason=model.Reason
            };

            _context.User_set.Add(admin);
            await _context.SaveChangesAsync();

            if (model.Role == "Doctor")
            {
                var doctor = new Doctor
                {
                    FirstName = model.UserFirstName,
                    LastName = model.UserLastName,
                    Email = model.UserEmail,
                    ContactNumber = model.ContactNumber,
                    Qualification = model.Qualification,
                    Specialization=model.Specialization,
                    Experience=model.Experience,
                    Hospital=model.Hospital,
                };

                _context.Doctor_set.Add(doctor);
                await _context.SaveChangesAsync();
            }

            return Ok("Registration successful");
        }


    }
}
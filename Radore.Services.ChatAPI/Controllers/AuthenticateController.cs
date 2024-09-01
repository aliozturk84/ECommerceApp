using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Radore.Services.ChatAPI.Models;

namespace Radore.Services.ChatAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        [HttpPost]
        public IActionResult Authenticate([FromBody] User user)
        {
            if (user.Username == "validUser")
            {
                return Ok();
            }
            return Unauthorized();
        }
    }

}

using Microsoft.AspNetCore.Mvc;
using React_Form_App.Models;

namespace React_Form_App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetCommentsController : ControllerBase
    {
        private readonly ILogger<GetCommentsController> _logger;

        public GetCommentsController(ILogger<GetCommentsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<Comments> GeneratedComments()
        {
            List<Comments> _comments = new List<Comments>
            {
                new Comments
                {
                    Id = 1,
                    Author = "Caio Pereira",
                    Comment = "This is the first comment",
                    Date = DateTime.Now.AddDays(1)
                },
                new Comments
                {
                    Id = 2,
                    Author = "Luana Marega",
                    Comment = "This is the second comment",
                    Date = DateTime.Now.AddDays(2)
                },
                new Comments
                {
                    Id = 3,
                    Author = "Lola Marega Pereira",
                    Comment = "This is the third comment",
                    Date = DateTime.Now.AddDays(3)
                }
            };

            return _comments;
        }
    }
}
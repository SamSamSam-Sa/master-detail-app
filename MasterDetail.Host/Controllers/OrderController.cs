using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MasterDetail.Host.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly ILogger<OrderController> _logger;

        public OrderController(ILogger<OrderController> logger)
        {
            _logger = logger;
        }

        //[HttpGet]
        //public IEnumerable<object> Get()
        //{
        //    return
        //}
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PrimeNumbers.Api.Models;

namespace PrimeNumbers.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PrimeNumbersController : ControllerBase
    {
        [HttpGet, Route("/primenumbers/GetAllPrimeNumbersInBetween")]
        public async Task<ActionResult> GetAllPrimeNumbersInBetween([FromQuery] QueryParameters queryParameters)
        {
            if (queryParameters.MinNumber >= queryParameters.MaxNumber)
                return BadRequest();
            var r = from i in Enumerable.Range(queryParameters.MinNumber, queryParameters.MaxNumber - queryParameters.MinNumber).AsParallel()
                    where Enumerable.Range(1, (int)Math.Sqrt(i)).All(j => j == 1 || i % j != 0)
                    select i;
            return Ok( r.OrderByDescending(x => x).ToList());
        }

        [HttpGet, Route("/primenumbers/GetPrimeNumbers/{n}")]
        public async Task<ActionResult> GetPrimeNumbers(int n)
        {
            if (n < 2 || n > 100)
                return NotFound();
            var r = from i in Enumerable.Range(2, n - 1).AsParallel()
                    where Enumerable.Range(1, (int)Math.Sqrt(i)).All(j => j == 1 || i % j != 0)
                    select i;
            return Ok(r.OrderByDescending(x => x).ToList());
        }

    }
}

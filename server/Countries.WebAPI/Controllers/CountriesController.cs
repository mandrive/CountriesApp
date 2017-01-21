using Countries.WebAPI.Interfaces;
using Countries.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Countries.WebAPI.Controllers
{
    public class CountriesController : ApiController
    {
        private ICountriesRepository _countriesRepository;

        public CountriesController(ICountriesRepository countriesRepository)
        {
            _countriesRepository = countriesRepository;
        }

        // GET: api/Countries
        public IEnumerable<Country> Get()
        {
            return _countriesRepository.GetAll();
        }

        // GET: api/Countries/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Countries
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Countries/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Countries/5
        public void Delete(int id)
        {
        }
    }
}

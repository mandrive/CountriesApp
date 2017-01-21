using Countries.WebAPI.Interfaces;
using Countries.WebAPI.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Countries.WebAPI.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CountriesController : ApiController
    {
        private ICountriesRepository _countriesRepository;

        public CountriesController(ICountriesRepository countriesRepository)
        {
            _countriesRepository = countriesRepository;
        }

        public IEnumerable<Country> Get()
        {
            return _countriesRepository.GetAll();
        }
        
        public Country Get(int id)
        {
            return _countriesRepository.GetById(id);
        }

        public void Post([FromBody]Country country)
        {
            _countriesRepository.Add(country);
        }

        public void Delete(int id)
        {
            _countriesRepository.Remove(id);
        }
    }
}

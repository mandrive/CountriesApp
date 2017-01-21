using Countries.WebAPI.Interfaces;
using System;
using Countries.WebAPI.Models;

namespace Countries.WebAPI.Repositories
{
    public class CountriesRepository : ICountriesRepository
    {
        private string _filePath;

        public CountriesRepository(string filePath)
        {
            _filePath = filePath;
        }

        public void Add(Country country)
        {
            throw new NotImplementedException();
        }

        public void Remove(Country country)
        {
            throw new NotImplementedException();
        }

        public void SaveChanges()
        {
            throw new NotImplementedException();
        }
    }
}
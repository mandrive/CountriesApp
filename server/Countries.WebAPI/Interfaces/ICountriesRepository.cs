using Countries.WebAPI.Models;
using System.Collections.Generic;

namespace Countries.WebAPI.Interfaces
{
    public interface ICountriesRepository
    {
        IList<Country> GetAll();
        Country GetById(int id);
        void Add(Country country);
        void Remove(int id);
        void SaveChanges();
    }
}

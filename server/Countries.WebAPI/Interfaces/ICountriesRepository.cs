using Countries.WebAPI.Models;
using System.Collections.Generic;

namespace Countries.WebAPI.Interfaces
{
    public interface ICountriesRepository
    {
        IList<Country> GetAll();
        void Add(Country country);
        void Remove(Country country);
        void SaveChanges();
    }
}

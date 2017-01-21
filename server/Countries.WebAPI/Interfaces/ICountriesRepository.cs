using Countries.WebAPI.Models;

namespace Countries.WebAPI.Interfaces
{
    public interface ICountriesRepository
    {
        void Add(Country country);
        void Remove(Country country);
        void SaveChanges();
    }
}

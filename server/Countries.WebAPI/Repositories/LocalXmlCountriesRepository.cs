using Countries.WebAPI.Interfaces;
using System;
using Countries.WebAPI.Models;
using System.Collections.Generic;
using System.Xml.Serialization;
using System.IO;
using System.Linq;

namespace Countries.WebAPI.Repositories
{
    public class LocalXmlCountriesRepository : ICountriesRepository
    {
        private string _filePath;
        private XmlSerializer _serializer;
        private CountriesCollection _countriesCollection;

        public LocalXmlCountriesRepository(string filePath)
        {
            _filePath = filePath;
            _serializer = new XmlSerializer(typeof(CountriesCollection));
        }

        private void InitializeCountriesCollection()
        {
            using (var fileStream = new FileStream(_filePath, FileMode.Open, FileAccess.Read, FileShare.Read))
            {
                _countriesCollection = (CountriesCollection)_serializer.Deserialize(fileStream);
            }
        }

        public IList<Country> GetAll()
        {
            if (_countriesCollection == null)
            {
                InitializeCountriesCollection();
            }

            return _countriesCollection.Countries;
        }

        public void Add(Country country)
        {
            if (_countriesCollection == null)
            {
                InitializeCountriesCollection();
            }

            country.Id = _countriesCollection.Countries != null && _countriesCollection.Countries.Count > 0 ?_countriesCollection.Countries.Max(c => c.Id) + 1 : 1;

            _countriesCollection.Countries.Add(country);
        }

        public void Remove(int id)
        {
            if (_countriesCollection == null)
            {
                InitializeCountriesCollection();
            }

            var countryToRemove = _countriesCollection.Countries.SingleOrDefault(c => c.Id == id);
            if (countryToRemove != null)
            {
                _countriesCollection.Countries.Remove(countryToRemove);
            }
        }

        public void SaveChanges()
        {
            if (_countriesCollection == null)
            {
                throw new Exception("Countries collection is null");
            }

            using (var fileStream = new FileStream(_filePath, FileMode.Open, FileAccess.ReadWrite, FileShare.None))
            {
                _serializer.Serialize(fileStream, _countriesCollection);
            }
        }

        public Country GetById(int id)
        {
            if (_countriesCollection == null)
            {
                InitializeCountriesCollection();
            }

            return _countriesCollection.Countries.SingleOrDefault(c => c.Id == id);
        }
    }
}
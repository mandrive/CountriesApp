using Countries.WebAPI.Interfaces;
using System;
using Countries.WebAPI.Models;
using System.Collections.Generic;
using System.Xml.Serialization;
using System.IO;

namespace Countries.WebAPI.Repositories
{
    public class CountriesRepository : ICountriesRepository
    {
        private string _filePath;
        private XmlSerializer _serializer;
        private CountriesCollection _countriesCollection;

        public CountriesRepository(string filePath)
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
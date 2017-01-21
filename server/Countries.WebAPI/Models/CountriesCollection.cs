using System;
using System.Collections.Generic;
using System.Xml.Serialization;

namespace Countries.WebAPI.Models
{
    [Serializable]
    [XmlRoot("Countries")]
    public class CountriesCollection
    {
        [XmlElement("Country")]
        public List<Country> Countries { get; set; }
    }
}
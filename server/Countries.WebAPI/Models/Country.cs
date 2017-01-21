using System;
using System.Xml.Serialization;

namespace Countries.WebAPI.Models
{
    [Serializable]
    public class Country
    {
        [XmlElement("Id")]
        public int Id { get; set; }

        [XmlElement("Name")]
        public string Name { get; set; }

        [XmlElement("Capital")]
        public Capital Capital { get; set; }
    }
}
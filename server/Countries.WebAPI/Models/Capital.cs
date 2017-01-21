using System;
using System.Xml.Serialization;

namespace Countries.WebAPI.Models
{
    [Serializable]
    public class Capital
    {
        [XmlElement("Name")]
        public string Name { get; set; }
    }
}
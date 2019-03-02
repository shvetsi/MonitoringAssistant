using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MonitoringAssistant.Models
{
    public class Incident
    {
        public EnvironmentInfo Environment { get; set; }
        public string Decsription { get; set; }        
        public string[] Actions { get; set; }
        public string[] Attachments { get; set; }
    }
}
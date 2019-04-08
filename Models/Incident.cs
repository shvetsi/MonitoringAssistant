using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MonitoringAssistant.Models
{
    public class Incident
    {
        public string Id { get; set; }
        public EnvironmentInfo Environment { get; set; }
        public string Description { get; set; }        
        public string[] Actions { get; set; }
        public string[] Attachments { get; set; }
    }
}
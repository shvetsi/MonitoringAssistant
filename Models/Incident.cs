using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MonitoringAssistant.Models
{
    public class Incident
    {
        [BsonId]
        public Guid Id { get; set; }
        public string[] MachineNames { get; set; }
        public string Decsription { get; set; }        
        public string[] Actions { get; set; }
        public string[] Attachments { get; set; }
    }
}
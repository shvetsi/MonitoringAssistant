using System;

namespace MonitoringAssistant.Models
{
    public class Report
    {
        public string Id { get; set; }
        public string User { get; set; }
        public DateTime Date { get; set; }
        public Incident[] Incidents { get; set; }

    }
}
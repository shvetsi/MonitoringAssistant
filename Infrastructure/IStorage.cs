using System.Collections.Generic;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Infrastructure
{
    public interface IStorage
    {
         IEnumerable<Incident> GetIncidents();
         IEnumerable<Report> GetReports();
    }
}
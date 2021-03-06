using System.Collections.Generic;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Infrastructure
{
    public interface IStorage
    {
         IEnumerable<Incident> GetIncidents();
         IEnumerable<Report> GetReports();
         Report GetReport(string id);
         string UpdateReport(Report report);
    }
}
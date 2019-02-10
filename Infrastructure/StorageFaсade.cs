using System.Collections.Generic;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Infrastructure
{
    public class StorageFaсade
    {
        IStorage _storage;
        public StorageFaсade(IStorage storage)
        {
            _storage = storage;
        }
        public IEnumerable<Incident> GetIncidents()
        {
            return _storage.GetIncidents();
        }
        public IEnumerable<Report> GetReports()
        {
            return _storage.GetReports();
        }

        public string UpdateReport(Report report)
        {
            return _storage.UpdateReport(report);
        }
    }
}
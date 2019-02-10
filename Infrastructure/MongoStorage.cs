using System.Collections.Generic;
using MongoDB.Driver;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Infrastructure
{
    public class MongoStorage: IStorage
    {
        IMongoDatabase _mongoDB;
        IMongoCollection<Incident> _incidents;
        IMongoCollection<Report> _reports;
        public MongoStorage(IMongoDatabase mongoDB)
        {
            _mongoDB = mongoDB;
            _incidents = _mongoDB.GetCollection<Incident>("Incidents");
            _reports = _mongoDB.GetCollection<Report>("Reports");
        }
        public IEnumerable<Incident> GetIncidents()
        {
            return _incidents.Find(incident => true).ToList();
        }
        public IEnumerable<Report> GetReports()
        {
            return _reports.Find(report => true).ToList();
        }
        public IEnumerable<Report> GetReport(string id)
        {
            return _reports.Find(report => report.Id == id).ToList();
        }
    }
}
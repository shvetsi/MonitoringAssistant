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
        public Report GetReport(string id)
        {
            return _reports.Find(report => report.Id == id).FirstOrDefault();
        }

//TODO: remove CountDocuments
        public string UpdateReport(Report report)
        {
            if(!string.IsNullOrEmpty(report.Id))
            {
                _reports.ReplaceOne(r => r.Id == report.Id, report);
                return report.Id;
            }
            report.Id = _reports.CountDocuments(f => true).ToString();
            _reports.InsertOne(report);
            return report.Id;
        }
    }
}
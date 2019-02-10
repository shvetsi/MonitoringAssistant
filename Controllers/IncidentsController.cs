using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MonitoringAssistant.Infrastructure;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Controllers
{
    [Route("api/[controller]")]
    public class IncidentsController: Controller
    {
        StorageFaсade _storageFacade;
        public IncidentsController(StorageFaсade storageFacade)
        {
            _storageFacade = storageFacade;
        }

        [HttpGet("/api/incidents")]
        public IEnumerable<Incident> GetIncidents()
        {
            return _storageFacade.GetIncidents();
        } 
    }
}
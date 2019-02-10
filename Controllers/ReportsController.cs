using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MonitoringAssistant.Infrastructure;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Controllers
{
    [Route("api/[controller]")]
    public class ReportsController: Controller
    {
        private readonly StorageFaсade _storageFacade;

        public ReportsController(StorageFaсade storageFacade)
        {
            _storageFacade = storageFacade;
        }

        [HttpGet]
        public IEnumerable<Report> GetReports()
        {
            return _storageFacade.GetReports();
        }
    }
}
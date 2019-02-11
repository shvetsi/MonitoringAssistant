using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MonitoringAssistant.Infrastructure;
using MonitoringAssistant.Models;

namespace MonitoringAssistant.Controllers
{
    [Route("/api/[controller]")]
    public class ReportsController: Controller
    {
        private readonly StorageFaсade _storageFacade;

        public ReportsController(StorageFaсade storageFacade)
        {
            _storageFacade = storageFacade;
        }

        [HttpGet]
        public IActionResult GetReports()
        {
            Debug.WriteLine("GetReports");
            return Ok(_storageFacade.GetReports());
        }

        [HttpPost]
        public IActionResult CreateReport([FromBody] Report report)
        {
            Debug.WriteLine("CreateReport");
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var id = _storageFacade.UpdateReport(report);
            return Ok(id);
        }
    }
}
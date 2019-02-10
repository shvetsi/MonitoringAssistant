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
        public IActionResult GetReports()
        {
            return Ok(_storageFacade.GetReports());
        }

        [HttpPost]
        public IActionResult CreateReport([FromBody] Report report)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var id = _storageFacade.UpdateReport(report);
            return Ok(id);
        }
    }
}
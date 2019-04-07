using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MonitoringAssistant.Infrastructure;

namespace MonitoringAssistant.Controllers
{
    [Route("/api/files")]
    public class FilesController : Controller
    {
        readonly IHostingEnvironment _host;
        readonly string _uploadsPath;
        private readonly StorageFaсade _storageFacade;
        public FilesController(IHostingEnvironment host, StorageFaсade storageFacade)
        {
            this._storageFacade = storageFacade;
            this._host = host;
            _uploadsPath = Path.Combine(host.WebRootPath, "uploads");
        }

        [HttpPost("{reportId}/{incidentId}")]
        public async Task<IActionResult> UploadFiles(string reportId, string incidentId, IFormCollection files)
        {
            if (!Directory.Exists(_uploadsPath))
                Directory.CreateDirectory(_uploadsPath);
            var report = _storageFacade.GetReport(reportId);
            var incident = report?.Incidents.FirstOrDefault(i => i.Id == incidentId);
            if(incident != null)
            {
                foreach (var f in files.Files)
                {
                    var fileName = Guid.NewGuid() + Path.GetExtension(f.FileName);
                    var filePath = Path.Combine(_uploadsPath, fileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await f.CopyToAsync(fileStream);
                    }
                    incident.Attachments.Add(fileName);
                }
                _storageFacade.UpdateReport(report);
            }
            return Ok();
        }
        [HttpPost("{reportId}")]
        public async Task<IActionResult> UploadFile(string reportId, string incidentId, IFormFile file)
        {
            if (!Directory.Exists(_uploadsPath))
                Directory.CreateDirectory(_uploadsPath);

            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(_uploadsPath, fileName);
            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            return Ok();
        }
    }
}
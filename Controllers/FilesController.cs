using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
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

        // [HttpPost("{reportId}/{incidentId}")]
        // public async Task<IActionResult> UploadFiles(string reportId, string incidentId, IFormCollection files)
        // {
        //     if (!Directory.Exists(_uploadsPath))
        //         Directory.CreateDirectory(_uploadsPath);
        //     var report = _storageFacade.GetReport(reportId);
        //     var incident = report?.Incidents.FirstOrDefault(i => i.Id == incidentId);
        //     if(incident != null)
        //     {
        //         var list = new List<string>();
        //         foreach (var f in files.Files)
        //         {
        //             var fileName = Guid.NewGuid() + Path.GetExtension(f.FileName);
        //             var filePath = Path.Combine(_uploadsPath, fileName);
        //             using (var fileStream = new FileStream(filePath, FileMode.Create))
        //             {
        //                 await f.CopyToAsync(fileStream);
        //             }
        //             list.Add(fileName);
        //         }
        //         incident.Attachments = list.ToArray();
        //         _storageFacade.UpdateReport(report);
        //     }
        //     return Ok();
        // }

        [HttpPost("{reportId}/{incidentId}")]
        public async Task<IActionResult> UploadFile(string reportId, string incidentId, IFormFile file)
        {
            if (!Directory.Exists(_uploadsPath))
                Directory.CreateDirectory(_uploadsPath);
            var report = _storageFacade.GetReport(reportId);
            var incident = report?.Incidents.FirstOrDefault(i => i.Id == incidentId);

            if(incident == null) return NotFound("There is no such report or incident.");
            if(file == null) return NotFound("File can't be null");

            var list = new List<string>(incident.Attachments);
            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            var fullPath = Path.Combine(_uploadsPath, fileName);
            using (var fileStream = new FileStream(fullPath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }
            list.Add(fileName);
            incident.Attachments = list.ToArray();
            _storageFacade.UpdateReport(report);

            byte[] fileBytes = System.IO.File.ReadAllBytes(fullPath);
            return Ok("data:image/png;base64," + Convert.ToBase64String(fileBytes));            
        }

        [HttpGet("{fileName}")]
        public async Task<IActionResult> DownloadFile(string fileName)
        {
            try
            {
                if (!Directory.Exists(_uploadsPath))
                    return NoContent();

                var fullPath = Path.Combine(_uploadsPath, fileName);
                var cd = new ContentDispositionHeaderValue("attachment")
                    {
                        FileName = fileName
                    };
                    Response.Headers.Add(HeaderNames.ContentDisposition, cd.ToString());
                byte[] fileBytes = System.IO.File.ReadAllBytes(fullPath);
                return Ok("data:image/png;base64," + Convert.ToBase64String(fileBytes));
            }
            catch
            {
                return NotFound(fileName);
            }
        }
    }
}
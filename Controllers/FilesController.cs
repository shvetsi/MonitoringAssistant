// using System;
// using System.IO;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;

// namespace MonitoringAssistant.Controllers
// {
//     [Route("/api/{reportId}")]
//     public class FilesController : Controller
//     {
//         readonly IHostingEnvironment _host;
//         readonly string _uploadsPath;
//         public FilesController(IHostingEnvironment host)
//         {
//             this._host = host;
//             _uploadsPath = Path.Combine(host.WebRootPath, "uploads");
//         }

//         [HttpPost("{incidentId}")]
//         public async Task<IActionResult> UploadFiles(string reportId, string incidentId, IFormCollection files)
//         {
//             if(!Directory.Exists(_uploadsPath))
//                 Directory.CreateDirectory(_uploadsPath);

//             foreach(var f in files.Files)
//             {
//                 var fileName = Guid.NewGuid() + Path.GetExtension(f.FileName);
//                 var filePath = Path.Combine(_uploadsPath, fileName);
//                 using(var fileStream = new FileStream(filePath, FileMode.Create))
//                 {
//                     await f.CopyToAsync(fileStream);
//                 }
//             }
//             return Ok();
//         }
//     }
// }
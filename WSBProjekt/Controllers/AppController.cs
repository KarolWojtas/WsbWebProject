using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WSBProjekt.Controllers
{
    public class AppController : Controller
    {
        public IActionResult App()
        {
            return View();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Filters.Controllers
{
    public class AdminController : Controller
    {
        [Authorize]
        public ViewResult Index()
        {
            return View();
        }

        [Authorize]
        public ViewResult Create()
        {
            return View();
        }
    }
}
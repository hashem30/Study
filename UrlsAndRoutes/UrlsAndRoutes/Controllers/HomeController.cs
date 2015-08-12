using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UrlsAndRoutes.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "Index";
            return View("ActionName");
        }

        //public ActionResult CustomVariable()
        //{
        //    ViewBag.Controller = "Home";
        //    ViewBag.Action = "CustomVariable";
        //    ViewBag.CustomVariable = RouteData.Values["id"];
        //    return View();
        //}

        public ActionResult CustomVariable(string id="DefaultID")
        {
            ViewBag.Controller = "Home";
            ViewBag.Action = "CustomVariable";
            //ViewBag.CustomVariable = id;
            ViewBag.CustomVariable = id;
            ViewBag.CatchAll = RouteData.Values["catchall"];
            return View();
        }

        //public ViewResult MyActionMethod()
        //{
        //    string myActionUrl = Url.Action("Index", new { id = "MyID" });
        //    string myRouteUrl = Url.RouteUrl(new
        //    {
        //        controller = "Home",
        //        action = "Index"
        //    });
        //    //... do something with URLs...
        //    return View();
        //}
        public RedirectToRouteResult MyActionMethod()
        {
            //return RedirectToAction("Index");
            return RedirectToRoute(new { controller = "Home", action = "Index", id = "MyID" });

        }
	}
}
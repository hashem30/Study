using ModelValidation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ModelValidation.Controllers
{
    public class HomeController : Controller
    {
        public ViewResult MakeBooking()
        {
            return View(new Appointment { Date = DateTime.Now });
        }

        [HttpPost]
        public ViewResult MakeBooking(Appointment appt)
        {
            //if (string.IsNullOrEmpty(appt.ClientName))
            //{
            //    ModelState.AddModelError("ClientName", "Please enter your name");
            //}
            //if (ModelState.IsValidField("Date") && DateTime.Now > appt.Date)
            //{
            //    ModelState.AddModelError("Date", "Please enter a date in the future");
            //}
            //if (!appt.TermsAccepted)
            //{
            //    ModelState.AddModelError("TermsAccepted", "You must accept the terms");
            //}
            //if (ModelState.IsValidField("ClientName") && ModelState.IsValidField("Date")
            //        && appt.ClientName == "Joe" && appt.Date.DayOfWeek == DayOfWeek.Monday)
            //{
            //    ModelState.AddModelError("", "Joe cannot book appointments on Mondays");
            //}
            if (ModelState.IsValid)
            {
                // statements to store new Appointment in a
                // repository would go here in a real project
                return View("Completed", appt);
            }
            else
            {
                return View();
            }
        }

        public JsonResult ValidateDate(string Date)
        {
            DateTime parsedDate;
            if (!DateTime.TryParse(Date, out parsedDate))
            {
                return Json("Please enter a valid date (mm/dd/yyyy) json",
                JsonRequestBehavior.AllowGet);
            }
            else if (DateTime.Now > parsedDate)
            {
                return Json("Please enter a date in the future json",
                JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(true, JsonRequestBehavior.AllowGet);
            }
        }
	}
}
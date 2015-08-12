using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Mvc.Routing.Constraints;
using UrlsAndRoutes.Infrastructure;

namespace UrlsAndRoutes
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            //routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Admin", action = "Index", id = UrlParameter.Optional }
            //);
            //Route myRoute = new Route("{controller}/{action}", new MvcRouteHandler());
            //routes.Add("MyRoute", myRoute);

            //routes.MapRoute("MyRoute","{controller}/{action}");
            //routes.MapRoute("MyRoute", "{controller}/{action}", new { action = "Index" });

            //routes.MapRoute("MyRoute", "{controller}/{action}/{id}", new { controller = "Home", action = "Index", id = "DefaultId" });
            //routes.MapRoute("AddContollerRoute", "Home/{action}/{id}/{*catchall}",
            //     new
            //     {
            //         controller = "Home",
            //         action = "Index",
            //         id = UrlParameter.Optional
            //     },
            //     new[] { "URLsAndRoutes.AdditionalControllers" });
            //routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
            //    new
            //    {
            //        controller = "Home",
            //        action = "Index",
            //        id = UrlParameter.Optional
            //    },
            //    new[] { "URLsAndRoutes.Controllers" });

            //routes.MapRoute("ShopSchema2", "Shop/OldAction", new { controller = "Home", action = "Index" });
            //routes.MapRoute("ShopSchema", "Shop/{action}", new { controller = "Home" });
            //routes.MapRoute("", "X{controller}/{action}");
            //routes.MapRoute("MyRoute", "{controller}/{action}", new { controller = "Home", action = "Index" });
            //routes.MapRoute("", "Public/{controller}/{action}", new { controller = "Home", action = "Index" });
            //routes.MapRoute("ChromeRoute", "{*catchall}",
            //    new { controller = "Home", action = "Index" },
            //    new { customConstraint = new UserAgentConstraint("Chrome") },
            //    new[] { "UrlsAndRoutes.AdditionalControllers" });
            //routes.MapRoute("MyRoute", "{controller}/{action}/{id}/{*catchall}",
            //    new { controller = "Home", action = "Index", id = UrlParameter.Optional },
            //    new { controller = "^H.*", action = "Index|About", httpMethod = new HttpMethodConstraint("GET"),
            //        id = new CompoundRouteConstraint(new IRouteConstraint[] {
            //            new AlphaRouteConstraint(),
            //            new MinLengthRouteConstraint(6)
            //            })
            //        },
            //    new[] { "URLsAndRoutes.Controllers" });

            routes.MapMvcAttributeRoutes();

            routes.Add(new Route("SayHello", new CustomRouteHandler()));

            routes.Add(new LegacyRoute(
                "~/article/windows_31_overviewhtml",
                "~/old/NET_10_Class_Library"));
            routes.MapRoute("MyRoute", "{controller}/{action}", new[] {"UrlsAndRoutes.Controllers"});
            routes.MapRoute("MyOtherRoute", "App/{action}", new { controller = "Home" }, new[] {"UrlsAndRoutes.Controllers"});

            
        }
    }
}

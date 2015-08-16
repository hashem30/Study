using System.Web.Mvc;
using MvcModels.Infrastructure;

namespace MvcModels.Models
{

    [ModelBinder(typeof(AddressSummaryBinder))]
    //[Bind(Include = "City")]
    public class AddressSummary
    {
        public string City { get; set; }
        public string Country { get; set; }
    }
}

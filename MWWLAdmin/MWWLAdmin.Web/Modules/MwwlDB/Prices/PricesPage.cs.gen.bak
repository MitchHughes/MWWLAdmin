

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/Prices", typeof(MWWLAdmin.MwwlDB.Pages.PricesController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Prices"), Route("{action=index}")]
    public class PricesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Prices/PricesIndex.cshtml");
        }
    }
}


[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/Products", typeof(MWWLAdmin.MwwlDB.Pages.ProductsController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Products"), Route("{action=index}")]
    public class ProductsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Products/ProductsIndex.cshtml");
        }
    }
}
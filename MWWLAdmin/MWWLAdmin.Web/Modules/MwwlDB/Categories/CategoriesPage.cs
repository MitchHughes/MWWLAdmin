

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/Categories", typeof(MWWLAdmin.MwwlDB.Pages.CategoriesController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Categories"), Route("{action=index}")]
    public class CategoriesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Categories/CategoriesIndex.cshtml");
        }
    }
}
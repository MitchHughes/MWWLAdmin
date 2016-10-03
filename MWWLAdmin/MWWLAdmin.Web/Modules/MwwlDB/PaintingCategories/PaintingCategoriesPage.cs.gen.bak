

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/PaintingCategories", typeof(MWWLAdmin.MwwlDB.Pages.PaintingCategoriesController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/PaintingCategories"), Route("{action=index}")]
    public class PaintingCategoriesController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/PaintingCategories/PaintingCategoriesIndex.cshtml");
        }
    }
}
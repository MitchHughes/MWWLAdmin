

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/Paintings", typeof(MWWLAdmin.MwwlDB.Pages.PaintingsController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Paintings"), Route("{action=index}")]
    public class PaintingsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Paintings/PaintingsIndex.cshtml");
        }
    }
}


namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Texts"), Route("{action=index}")]
    public class TextsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Texts/TextsIndex.cshtml");
        }
    }
}


[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "MwwlDB/Events", typeof(MWWLAdmin.MwwlDB.Pages.EventsController))]

namespace MWWLAdmin.MwwlDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MwwlDB/Events"), Route("{action=index}")]
    public class EventsController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MwwlDB/Events/EventsIndex.cshtml");
        }
    }
}
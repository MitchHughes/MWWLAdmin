using Serenity.Navigation;
using Administration = MWWLAdmin.Administration.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "icon-speedometer")]

[assembly: NavigationMenu(2000, "MWWL", icon: "icon-screen-desktop")]
[assembly: NavigationLink(2100, "MWWL/Events", typeof(MWWLAdmin.MwwlDB.Pages.EventsController))]
[assembly: NavigationLink(2200, "MWWL/Prices", typeof(MWWLAdmin.MwwlDB.Pages.PricesController))]
[assembly: NavigationLink(2300, "MWWL/Categories", typeof(MWWLAdmin.MwwlDB.Pages.CategoriesController))]
[assembly: NavigationLink(2400, "MWWL/Paintings", typeof(MWWLAdmin.MwwlDB.Pages.PaintingsController))]
[assembly: NavigationLink(2500, "MWWL/Products", typeof(MWWLAdmin.MwwlDB.Pages.ProductsController))]
[assembly: NavigationLink(2600, "MWWL/Messages", typeof(MWWLAdmin.MwwlDB.Pages.TextsController))]



[assembly: NavigationMenu(9000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(9100, "Administration/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(9200, "Administration/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(9300, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(9400, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]

namespace MWWLAdmin.MwwlDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MwwlDB.Events")]
    [BasedOnRow(typeof(Entities.EventsRow))]
    public class EventsForm
    {
        public String EventName { get; set; }
        public String EventLocation { get; set; }
        public String EventLink { get; set; }
        public DateTime EventStartDate { get; set; }
        public DateTime EventEndDate { get; set; }
        public Boolean EventActive { get; set; }
    }
}

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
		[DefaultValue("today")]
		public DateTime EventStartDate { get; set; }
		[DefaultValue("today")]
		public DateTime EventEndDate { get; set; }
		[DefaultValue(1)]
		public Boolean EventActive { get; set; }
    }
}
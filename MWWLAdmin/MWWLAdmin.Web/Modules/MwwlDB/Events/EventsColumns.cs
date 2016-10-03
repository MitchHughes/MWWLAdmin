
namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Events")]
    [BasedOnRow(typeof(Entities.EventsRow))]
    public class EventsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(40)]
        public Int32 EventId { get; set; }
        [EditLink]
        public String EventName { get; set; }
		[DisplayName("Location")]
		public String EventLocation { get; set; }
		[DisplayName("Link")]
		public String EventLink { get; set; }
		[DisplayName("Start")]
		public DateTime EventStartDate { get; set; }
		[DisplayName("End")]
		public DateTime EventEndDate { get; set; }
		[DisplayName("Active"), Width(55), AlignCenter]
		public Boolean EventActive { get; set; }
    }
}

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
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EventId { get; set; }
        [EditLink]
        public String EventName { get; set; }
        public String EventLocation { get; set; }
        public String EventLink { get; set; }
        public DateTime EventStartDate { get; set; }
        public DateTime EventEndDate { get; set; }
        public Boolean EventActive { get; set; }
    }
}
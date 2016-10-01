

namespace MWWLAdmin.MwwlDB.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Events"), InstanceName("Events"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class EventsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Event Id"), Identity]
        public Int32? EventId
        {
            get { return Fields.EventId[this]; }
            set { Fields.EventId[this] = value; }
        }

        [DisplayName("Event Name"), Size(200), NotNull, QuickSearch]
        public String EventName
        {
            get { return Fields.EventName[this]; }
            set { Fields.EventName[this] = value; }
        }

        [DisplayName("Event Location"), Size(200)]
        public String EventLocation
        {
            get { return Fields.EventLocation[this]; }
            set { Fields.EventLocation[this] = value; }
        }

        [DisplayName("Event Link"), Size(200)]
        public String EventLink
        {
            get { return Fields.EventLink[this]; }
            set { Fields.EventLink[this] = value; }
        }

        [DisplayName("Event Start Date")]
        public DateTime? EventStartDate
        {
            get { return Fields.EventStartDate[this]; }
            set { Fields.EventStartDate[this] = value; }
        }

        [DisplayName("Event End Date")]
        public DateTime? EventEndDate
        {
            get { return Fields.EventEndDate[this]; }
            set { Fields.EventEndDate[this] = value; }
        }

        [DisplayName("Event Active"), NotNull]
        public Boolean? EventActive
        {
            get { return Fields.EventActive[this]; }
            set { Fields.EventActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EventId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EventName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EventsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EventId;
            public StringField EventName;
            public StringField EventLocation;
            public StringField EventLink;
            public DateTimeField EventStartDate;
            public DateTimeField EventEndDate;
            public BooleanField EventActive;

            public RowFields()
                : base("[dbo].[Events]")
            {
                LocalTextPrefix = "MwwlDB.Events";
            }
        }
    }
}
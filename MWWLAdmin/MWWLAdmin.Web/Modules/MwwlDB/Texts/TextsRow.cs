

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

    [ConnectionKey("Default"), DisplayName("Texts"), InstanceName("Texts"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class TextsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Size(20), PrimaryKey]
        public String Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Text"), Size(200), NotNull, QuickSearch]
        public String Text
        {
            get { return Fields.Text[this]; }
            set { Fields.Text[this] = value; }
        }

        [DisplayName("Note"), Size(200), QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TextsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Id;
            public StringField Text;
            public StringField Note;

            public RowFields()
                : base("[dbo].[Texts]")
            {
                LocalTextPrefix = "MwwlDB.Texts";
            }
        }
    }
}
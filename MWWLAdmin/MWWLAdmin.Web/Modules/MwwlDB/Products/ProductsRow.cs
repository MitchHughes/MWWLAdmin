

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

    [ConnectionKey("Default"), DisplayName("Products"), InstanceName("Products"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ProductsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(50), NotNull, QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Available"), NotNull]
        public Boolean? Available
        {
            get { return Fields.Available[this]; }
            set { Fields.Available[this] = value; }
        }

        [DisplayName("Sequence")]
        public Int16? Sequence
        {
            get { return Fields.Sequence[this]; }
            set { Fields.Sequence[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Title; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Title;
            public StringField Description;
            public BooleanField Available;
            public Int16Field Sequence;

            public RowFields()
                : base("[dbo].[Products]")
            {
                LocalTextPrefix = "MwwlDB.Products";
            }
        }
    }
}


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

    [ConnectionKey("Default"), DisplayName("Prices"), InstanceName("Prices"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class PricesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Item"), Size(50), NotNull, QuickSearch]
        public String Item
        {
            get { return Fields.Item[this]; }
            set { Fields.Item[this] = value; }
        }

        [DisplayName("Description"), Size(200), QuickSearch]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Price"), Size(19), Scale(2), NotNull]
        public Decimal? Price
        {
            get { return Fields.Price[this]; }
            set { Fields.Price[this] = value; }
        }

        [DisplayName("Active"), NotNull]
        public Boolean? Active
        {
            get { return Fields.Active[this]; }
            set { Fields.Active[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), NotNull, ForeignKey("[dbo].[Products]", "ID"), LeftJoin("jProduct"), TextualField("ProductTitle")]
		[LookupEditor("MwwlDB.Products")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Title"), Expression("jProduct.[Title]")]
        public String ProductTitle
        {
            get { return Fields.ProductTitle[this]; }
            set { Fields.ProductTitle[this] = value; }
        }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription
        {
            get { return Fields.ProductDescription[this]; }
            set { Fields.ProductDescription[this] = value; }
        }

        [DisplayName("Product Available"), Expression("jProduct.[Available]")]
        public Boolean? ProductAvailable
        {
            get { return Fields.ProductAvailable[this]; }
            set { Fields.ProductAvailable[this] = value; }
        }

        [DisplayName("Product Sequence"), Expression("jProduct.[Sequence]")]
        public Int16? ProductSequence
        {
            get { return Fields.ProductSequence[this]; }
            set { Fields.ProductSequence[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Item; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PricesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Item;
            public StringField Description;
            public DecimalField Price;
            public BooleanField Active;
            public Int32Field ProductId;

            public StringField ProductTitle;
            public StringField ProductDescription;
            public BooleanField ProductAvailable;
            public Int16Field ProductSequence;

            public RowFields()
                : base("[dbo].[Prices]")
            {
                LocalTextPrefix = "MwwlDB.Prices";
            }
        }
    }
}
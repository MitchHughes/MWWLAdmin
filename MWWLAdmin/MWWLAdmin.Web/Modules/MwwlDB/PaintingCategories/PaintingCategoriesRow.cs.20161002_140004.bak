

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

    [ConnectionKey("Default"), DisplayName("PaintingCategories"), InstanceName("PaintingCategories"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class PaintingCategoriesRow : Row, IIdRow
    {
        [DisplayName("Category"), Column("CategoryID"), PrimaryKey, ForeignKey("[dbo].[Categories]", "ID"), LeftJoin("jCategory"), TextualField("CategoryName")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Painting"), Column("PaintingID"), PrimaryKey, ForeignKey("[dbo].[Paintings]", "ID"), LeftJoin("jPainting"), TextualField("PaintingTitle")]
        public Guid? PaintingId
        {
            get { return Fields.PaintingId[this]; }
            set { Fields.PaintingId[this] = value; }
        }

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Description"), Expression("jCategory.[Description]")]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        [DisplayName("Category Active"), Expression("jCategory.[Active]")]
        public Boolean? CategoryActive
        {
            get { return Fields.CategoryActive[this]; }
            set { Fields.CategoryActive[this] = value; }
        }

        [DisplayName("Painting Title"), Expression("jPainting.[Title]")]
        public String PaintingTitle
        {
            get { return Fields.PaintingTitle[this]; }
            set { Fields.PaintingTitle[this] = value; }
        }

        [DisplayName("Painting Original File Name"), Expression("jPainting.[OriginalFileName]")]
        public String PaintingOriginalFileName
        {
            get { return Fields.PaintingOriginalFileName[this]; }
            set { Fields.PaintingOriginalFileName[this] = value; }
        }

        [DisplayName("Painting Dimension"), Expression("jPainting.[Dimension]")]
        public String PaintingDimension
        {
            get { return Fields.PaintingDimension[this]; }
            set { Fields.PaintingDimension[this] = value; }
        }

        [DisplayName("Painting Workshop"), Expression("jPainting.[Workshop]")]
        public Boolean? PaintingWorkshop
        {
            get { return Fields.PaintingWorkshop[this]; }
            set { Fields.PaintingWorkshop[this] = value; }
        }

        [DisplayName("Painting Original Available"), Expression("jPainting.[OriginalAvailable]")]
        public Boolean? PaintingOriginalAvailable
        {
            get { return Fields.PaintingOriginalAvailable[this]; }
            set { Fields.PaintingOriginalAvailable[this] = value; }
        }

        [DisplayName("Painting Original Price"), Expression("jPainting.[OriginalPrice]")]
        public Decimal? PaintingOriginalPrice
        {
            get { return Fields.PaintingOriginalPrice[this]; }
            set { Fields.PaintingOriginalPrice[this] = value; }
        }

        [DisplayName("Painting Framed"), Expression("jPainting.[Framed]")]
        public Boolean? PaintingFramed
        {
            get { return Fields.PaintingFramed[this]; }
            set { Fields.PaintingFramed[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CategoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PaintingCategoriesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CategoryId;
            public GuidField PaintingId;

            public StringField CategoryName;
            public StringField CategoryDescription;
            public BooleanField CategoryActive;

            public StringField PaintingTitle;
            public StringField PaintingOriginalFileName;
            public StringField PaintingDimension;
            public BooleanField PaintingWorkshop;
            public BooleanField PaintingOriginalAvailable;
            public DecimalField PaintingOriginalPrice;
            public BooleanField PaintingFramed;

            public RowFields()
                : base("[dbo].[PaintingCategories]")
            {
                LocalTextPrefix = "MwwlDB.PaintingCategories";
            }
        }
    }
}
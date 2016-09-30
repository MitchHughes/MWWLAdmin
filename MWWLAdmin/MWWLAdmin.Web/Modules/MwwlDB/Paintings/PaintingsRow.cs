

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

    [ConnectionKey("Default"), DisplayName("Paintings"), InstanceName("Paintings"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class PaintingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey, QuickSearch]
        public Guid? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Title"), Size(100), QuickSearch]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Category"), Column("CategoryID"), NotNull, ForeignKey("[dbo].[Categories]", "ID"), LeftJoin("jCategory"), TextualField("CategoryName")]
		[LookupEditor("MwwlDB.Categories")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Original File Name"), Size(100), NotNull]
        public String OriginalFileName
        {
            get { return Fields.OriginalFileName[this]; }
            set { Fields.OriginalFileName[this] = value; }
        }

        [DisplayName("Dimension"), Size(50)]
        public String Dimension
        {
            get { return Fields.Dimension[this]; }
            set { Fields.Dimension[this] = value; }
        }

        [DisplayName("Workshop")]
        public Boolean? Workshop
        {
            get { return Fields.Workshop[this]; }
            set { Fields.Workshop[this] = value; }
        }

        [DisplayName("Large"), NotNull]
        public Boolean? Large
        {
            get { return Fields.Large[this]; }
            set { Fields.Large[this] = value; }
        }

        [DisplayName("Small"), NotNull]
        public Boolean? Small
        {
            get { return Fields.Small[this]; }
            set { Fields.Small[this] = value; }
        }

        [DisplayName("Original Available"), NotNull]
        public Boolean? OriginalAvailable
        {
            get { return Fields.OriginalAvailable[this]; }
            set { Fields.OriginalAvailable[this] = value; }
        }

        [DisplayName("Original Price"), Size(19), Scale(2)]
        public Decimal? OriginalPrice
        {
            get { return Fields.OriginalPrice[this]; }
            set { Fields.OriginalPrice[this] = value; }
        }

        [DisplayName("Framed"), NotNull]
        public Boolean? Framed
        {
            get { return Fields.Framed[this]; }
            set { Fields.Framed[this] = value; }
        }

        [DisplayName("Category Name"), Expression("jCategory.[Name]")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [DisplayName("Category Folder Name"), Expression("jCategory.[FolderName]")]
        public String CategoryFolderName
        {
            get { return Fields.CategoryFolderName[this]; }
            set { Fields.CategoryFolderName[this] = value; }
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

        public PaintingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField Id;
            public StringField Title;
            public Int32Field CategoryId;
            public StringField OriginalFileName;
            public StringField Dimension;
            public BooleanField Workshop;
            public BooleanField Large;
            public BooleanField Small;
            public BooleanField OriginalAvailable;
            public DecimalField OriginalPrice;
            public BooleanField Framed;

            public StringField CategoryName;
            public StringField CategoryFolderName;

            public RowFields()
                : base("[dbo].[Paintings]")
            {
                LocalTextPrefix = "MwwlDB.Paintings";
            }
        }
    }
}
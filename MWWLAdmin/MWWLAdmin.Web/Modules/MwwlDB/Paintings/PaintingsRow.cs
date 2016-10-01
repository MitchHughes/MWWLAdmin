﻿

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
        [DisplayName("Id"), Column("ID"), PrimaryKey]
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

        [DisplayName("Original Available"), NotNull]
        public Boolean? OriginalAvailable
        {
            get { return Fields.OriginalAvailable[this]; }
            set { Fields.OriginalAvailable[this] = value; }
        }

        [DisplayName("Original Price"), Size(19), Scale(4)]
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
            public StringField OriginalFileName;
            public StringField Dimension;
            public BooleanField Workshop;
            public BooleanField OriginalAvailable;
            public DecimalField OriginalPrice;
            public BooleanField Framed;

            public RowFields()
                : base("[dbo].[Paintings]")
            {
                LocalTextPrefix = "MwwlDB.Paintings";
            }
        }
    }
}
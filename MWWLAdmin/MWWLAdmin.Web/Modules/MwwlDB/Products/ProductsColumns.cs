
namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow))]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(40)]
        public Int32 Id { get; set; }
        [EditLink]
        public String Title { get; set; }
        public String Description { get; set; }
		[Width(68), AlignCenter]
		public Boolean Available { get; set; }
		[Width(75)]
		public Int32 Sequence { get; set; }
    }
}

namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Prices")]
    [BasedOnRow(typeof(Entities.PricesRow))]
    public class PricesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Item { get; set; }
        public String Description { get; set; }
        public Decimal Price { get; set; }
        public Boolean Active { get; set; }
		public String ProductTitle { get; set; }

	}
}
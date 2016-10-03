
namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Paintings")]
    [BasedOnRow(typeof(Entities.PaintingsRow))]
    public class PaintingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid Id { get; set; }
        [EditLink]
		[Width(165)]
		public String Title { get; set; }
        public String OriginalFileName { get; set; }
		[Width(84)]
		public String Dimension { get; set; }
		[Width(75), AlignCenter]
		public Boolean Workshop { get; set; }
		public Boolean OriginalAvailable { get; set; }
		[DisplayFormat("$#,##0.00"), Width(98), AlignRight]
		public Decimal OriginalPrice { get; set; }
		[Width(64), AlignCenter]
		public Boolean Framed { get; set; }
    }
}
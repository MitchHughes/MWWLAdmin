
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
        public String Title { get; set; }
        public Int32 CategoryId { get; set; }
        public String OriginalFileName { get; set; }
        public String Dimension { get; set; }
        public Boolean Workshop { get; set; }
        public Boolean Large { get; set; }
        public Boolean Small { get; set; }
        public Boolean OriginalAvailable { get; set; }
        public Decimal OriginalPrice { get; set; }
        public Boolean Framed { get; set; }
    }
}
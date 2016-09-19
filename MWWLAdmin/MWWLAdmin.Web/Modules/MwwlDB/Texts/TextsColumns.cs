
namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Texts")]
    [BasedOnRow(typeof(Entities.TextsRow))]
    public class TextsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Id { get; set; }
        public String Text { get; set; }
        public String Note { get; set; }
    }
}
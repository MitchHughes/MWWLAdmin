
namespace MWWLAdmin.MwwlDB.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("MwwlDB.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow))]
    public class CategoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Width(40)]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
		[Width(55), AlignCenter]
        public Boolean Active { get; set; }
    }
}
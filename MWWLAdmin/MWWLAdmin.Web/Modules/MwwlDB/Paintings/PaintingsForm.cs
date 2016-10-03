
namespace MWWLAdmin.MwwlDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MwwlDB.Paintings")]
    [BasedOnRow(typeof(Entities.PaintingsRow))]
    public class PaintingsForm
    {
        public String Title { get; set; }
        public String OriginalFileName { get; set; }
        public String Dimension { get; set; }
        public Boolean Workshop { get; set; }
        public Boolean OriginalAvailable { get; set; }
        public Decimal OriginalPrice { get; set; }
        public Boolean Framed { get; set; }
		public List<Int32> CategoryList { get; set; }

	}
}
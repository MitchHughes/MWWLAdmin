
namespace MWWLAdmin.MwwlDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MwwlDB.Prices")]
    [BasedOnRow(typeof(Entities.PricesRow))]
    public class PricesForm
    {
        public String Item { get; set; }
        public String Description { get; set; }
        public Decimal Price { get; set; }
        public Boolean Active { get; set; }
        public Int32 ProductId { get; set; }
    }
}
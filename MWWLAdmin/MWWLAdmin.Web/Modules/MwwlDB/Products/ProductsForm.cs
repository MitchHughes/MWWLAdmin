﻿
namespace MWWLAdmin.MwwlDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MwwlDB.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow))]
    public class ProductsForm
    {
        public String Title { get; set; }
        public String Description { get; set; }
        public Boolean Available { get; set; }
        public Int16 Sequence { get; set; }
    }
}
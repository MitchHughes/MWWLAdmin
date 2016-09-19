
namespace MWWLAdmin.MwwlDB.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("MwwlDB.Texts")]
    [BasedOnRow(typeof(Entities.TextsRow))]
    public class TextsForm
    {
        public String Text { get; set; }
        public String Note { get; set; }
    }
}
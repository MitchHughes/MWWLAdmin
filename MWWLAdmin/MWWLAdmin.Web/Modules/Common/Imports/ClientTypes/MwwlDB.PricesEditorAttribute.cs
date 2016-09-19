using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.MwwlDB
{
    public partial class PricesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MWWLAdmin.MwwlDB.PricesEditor";

        public PricesEditorAttribute()
            : base(Key)
        {
        }
    }
}


using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.MwwlDB
{
    public partial class PaintingsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MWWLAdmin.MwwlDB.PaintingsEditor";

        public PaintingsEditorAttribute()
            : base(Key)
        {
        }
    }
}


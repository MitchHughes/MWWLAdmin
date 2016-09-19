using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.MwwlDB
{
    public partial class TextsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MWWLAdmin.MwwlDB.TextsEditor";

        public TextsEditorAttribute()
            : base(Key)
        {
        }
    }
}


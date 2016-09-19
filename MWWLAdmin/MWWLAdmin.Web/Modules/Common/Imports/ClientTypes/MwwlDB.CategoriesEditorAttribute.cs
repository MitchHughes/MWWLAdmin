using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.MwwlDB
{
    public partial class CategoriesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MWWLAdmin.MwwlDB.CategoriesEditor";

        public CategoriesEditorAttribute()
            : base(Key)
        {
        }
    }
}


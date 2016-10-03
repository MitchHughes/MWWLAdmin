using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.MwwlDB
{
    public partial class CategoryListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "MWWLAdmin.MwwlDB.CategoryListFormatter";

        public CategoryListFormatterAttribute()
            : base(Key)
        {
        }
    }
}


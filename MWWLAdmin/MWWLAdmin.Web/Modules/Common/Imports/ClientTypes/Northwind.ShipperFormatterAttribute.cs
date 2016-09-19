using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MWWLAdmin.Northwind
{
	public partial class ShipperFormatterAttribute : CustomFormatterAttribute
	{
		public const string Key = "MWWLAdmin.Northwind.ShipperFormatter";

		public ShipperFormatterAttribute()
			: base(Key)
		{
		}
	}
}


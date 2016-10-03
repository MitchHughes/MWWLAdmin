using System;
using FluentMigrator;
using FluentMigrator.Runner.Extensions;

namespace MWWLAdmin.Migrations.DefaultDB
{
	[Migration(20160919112000)]
	public class MwwlDB_20160919_112000_InitialCreation : FluentMigrator.Migration
	{
		public override void Up()
		{
			// Most of the time, the core database will already exist when adding in the 
			// Serenity schema, so skip skip table creation and change from smallmoney to money instead.
			if (Schema.Table("Paintings").Exists())
			{
				Alter.Column("OriginalPrice").OnTable("Paintings").AsCurrency();
				Alter.Column("Price").OnTable("Prices").AsCurrency();
				Delete.Column("Sequence").FromTable("Products");
				Create.Column("Sequence").OnTable("Products").AsInt32().Nullable();
				return;
			}

			#region Create Tables
			Create.Table("Categories").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Name").AsString(50).NotNullable()
				.WithColumn("FolderName").AsString(50).NotNullable();

			Create.Table("Paintings").InSchema("dbo")
				.WithColumn("ID").AsGuid().NotNullable().PrimaryKey()
				.WithColumn("Title").AsString(100).Nullable()
				.WithColumn("CategoryID").AsInt32().NotNullable()
				.WithColumn("OriginalFileName").AsString(100).NotNullable()
				.WithColumn("Dimension").AsString(50).Nullable()
				.WithColumn("Workshop").AsBoolean().Nullable()
				.WithColumn("Large").AsBoolean().NotNullable()
				.WithColumn("Small").AsBoolean().NotNullable()
				.WithColumn("OriginalAvailable").AsBoolean().NotNullable()
				.WithColumn("OriginalPrice").AsCurrency().Nullable()
				.WithColumn("Framed").AsBoolean().NotNullable();

			Create.Table("Prices").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Item").AsString(50).NotNullable()
				.WithColumn("Description").AsString(200).Nullable()
				.WithColumn("Price").AsCurrency().NotNullable()
				.WithColumn("Active").AsBoolean().NotNullable()
				.WithColumn("ProductID").AsInt32().NotNullable();

			Create.Table("Products").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Title").AsString(50).NotNullable()
				.WithColumn("Description").AsString(200).Nullable()
				.WithColumn("Available").AsBoolean().NotNullable()
				.WithColumn("Sequence").AsInt32().Nullable();

			Create.Table("Texts").InSchema("dbo")
				.WithColumn("ID").AsFixedLengthString(20).NotNullable().PrimaryKey()
				.WithColumn("Text").AsString(200).NotNullable()
				.WithColumn("Note").AsString(200).Nullable();
			#endregion

			#region Create Foreign Keys
			Create.ForeignKey("FK_Paintings_Categories")
				.FromTable("Paintings").InSchema("dbo").ForeignColumns("CategoryID")
				.ToTable("Categories").InSchema("dbo").PrimaryColumns("ID");

			Create.ForeignKey("FK_Prices_Products")
				.FromTable("Prices").InSchema("dbo").ForeignColumns("ProductID")
				.ToTable("Products").InSchema("dbo").PrimaryColumns("ID");
			#endregion

			#region Create Unique Constraints
			Create.UniqueConstraint("IX_Products_Title")
				.OnTable("Products").WithSchema("dbo")
				.Column("Title");
			#endregion

		}

		public override void Down()
		{
			#region Delete Unique Constraints
			Delete.UniqueConstraint("IX_Products_Title").FromTable("Products").InSchema("dbo");
			#endregion

			#region Delete Foreign Keys
			Delete.ForeignKey("FK_Paintings_Categories").OnTable("Paintings").InSchema("dbo");
			Delete.ForeignKey("FK_Prices_Products").OnTable("Prices").InSchema("dbo");
			#endregion

			#region Delete Tables
			Delete.Table("Categories").InSchema("dbo");
			Delete.Table("Paintings").InSchema("dbo");
			Delete.Table("Prices").InSchema("dbo");
			Delete.Table("Products").InSchema("dbo");
			Delete.Table("Texts").InSchema("dbo");
			#endregion

			#region Delete Schemas
			#endregion
		}

	}
}

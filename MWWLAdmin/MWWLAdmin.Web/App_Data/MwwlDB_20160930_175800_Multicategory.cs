using System;
using FluentMigrator;
using FluentMigrator.Runner.Extensions;

namespace MWWLAdmin.Migrations.DefaultDB
{
	[Migration(20160930175800)]
	public class MwwlDB_20160930_175800_Multicategory : FluentMigrator.Migration
	{
		public override void Up()
		{
			#region Create Schemas
			#endregion

			#region Create Tables
			Create.Table("Categories").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Name").AsString(100).NotNullable()
				.WithColumn("Description").AsString(50).Nullable()
				.WithColumn("Active").AsBoolean().NotNullable();

			Create.Table("PaintingCategories").InSchema("dbo")
				.WithColumn("PaintingID").AsGuid().NotNullable().PrimaryKey()
				.WithColumn("CategoryID").AsInt32().NotNullable().PrimaryKey();

			Create.Table("Paintings").InSchema("dbo")
				.WithColumn("ID").AsGuid().NotNullable().PrimaryKey()
				.WithColumn("Title").AsString(100).Nullable()
				.WithColumn("OriginalFileName").AsString(100).NotNullable()
				.WithColumn("Dimension").AsString(50).Nullable()
				.WithColumn("Workshop").AsBoolean().Nullable()
				.WithColumn("OriginalAvailable").AsBoolean().Nullable()
				.WithColumn("OriginalPrice").AsCustom("SMALLMONEY").Nullable()
				.WithColumn("Framed").AsBoolean().Nullable()
				.WithColumn("Width").AsInt32().Nullable()
				.WithColumn("Height").AsInt32().Nullable();

			Create.Table("Prices").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Item").AsString(100).NotNullable()
				.WithColumn("Description").AsString(200).Nullable()
				.WithColumn("Price").AsCustom("SMALLMONEY").NotNullable()
				.WithColumn("Active").AsBoolean().NotNullable()
				.WithColumn("ProductID").AsInt32().NotNullable();

			Create.Table("Products").InSchema("dbo")
				.WithColumn("ID").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("Title").AsString(100).NotNullable()
				.WithColumn("Description").AsString(500).Nullable()
				.WithColumn("Available").AsBoolean().NotNullable()
				.WithColumn("Sequence").AsByte().Nullable();

			Create.Table("sysdiagrams").InSchema("dbo")
				.WithColumn("name").AsString(128).NotNullable()
				.WithColumn("principal_id").AsInt32().NotNullable()
				.WithColumn("diagram_id").AsInt32().Identity().NotNullable().PrimaryKey()
				.WithColumn("version").AsInt32().Nullable()
				.WithColumn("definition").AsBinary(-1).Nullable();

			Create.Table("Texts").InSchema("dbo")
				.WithColumn("ID").AsFixedLengthString(20).NotNullable().PrimaryKey()
				.WithColumn("Text").AsString(200).NotNullable()
				.WithColumn("Note").AsString(200).Nullable();
			#endregion

			#region Create Foreign Keys
			Create.ForeignKey("FK_PaintingCategories_Categories")
				.FromTable("PaintingCategories").InSchema("dbo").ForeignColumns("CategoryID")
				.ToTable("Categories").InSchema("dbo").PrimaryColumns("ID");

			Create.ForeignKey("FK_PaintingCategories_Paintings")
				.FromTable("PaintingCategories").InSchema("dbo").ForeignColumns("PaintingID")
				.ToTable("Paintings").InSchema("dbo").PrimaryColumns("ID");

			Create.ForeignKey("FK_Prices_Products")
				.FromTable("Prices").InSchema("dbo").ForeignColumns("ProductID")
				.ToTable("Products").InSchema("dbo").PrimaryColumns("ID");
			#endregion

			#region Create Unique Constraints
			Create.UniqueConstraint("IX_Products_Title")
				.OnTable("Products").WithSchema("dbo")
				.Column("Title");

			Create.UniqueConstraint("UK_principal_name")
				.OnTable("sysdiagrams").WithSchema("dbo")
				.Columns("principal_id,name".Split(','));
			#endregion

			#region Create Indexes
			#endregion
		}

		public override void Down()
		{
			#region Delete Unique Constraints
			Delete.UniqueConstraint("IX_Products_Title").FromTable("Products").InSchema("dbo");
			Delete.UniqueConstraint("UK_principal_name").FromTable("sysdiagrams").InSchema("dbo");
			#endregion

			#region Delete Foreign Keys
			Delete.ForeignKey("FK_PaintingCategories_Categories").OnTable("PaintingCategories").InSchema("dbo");
			Delete.ForeignKey("FK_PaintingCategories_Paintings").OnTable("PaintingCategories").InSchema("dbo");
			Delete.ForeignKey("FK_Prices_Products").OnTable("Prices").InSchema("dbo");
			#endregion

			#region Delete Tables
			Delete.Table("Categories").InSchema("dbo");
			Delete.Table("PaintingCategories").InSchema("dbo");
			Delete.Table("Paintings").InSchema("dbo");
			Delete.Table("Prices").InSchema("dbo");
			Delete.Table("Products").InSchema("dbo");
			Delete.Table("sysdiagrams").InSchema("dbo");
			Delete.Table("Texts").InSchema("dbo");
			#endregion

			#region Delete Schemas
			#endregion
		}

	}
}

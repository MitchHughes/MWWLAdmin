using System;
using FluentMigrator;
using FluentMigrator.Runner.Extensions;

namespace MWWLAdmin.Migrations.DefaultDB
{
	[Migration(20160930175800)]
	public class MwwlDB_20160930_175800_Multicategory : Migration
	{
		public override void Up()
		{
			// Add new table for multiple categories
			// Note: Add primary key seperately since we want a clustered index on the foreign keys
			Create.Table("PaintingCategories").InSchema("dbo")
				.WithColumn("PaintingCategoriesID").AsInt32().Identity(10000,1).NotNullable()
				.WithColumn("CategoryID").AsInt32().NotNullable()
				.WithColumn("PaintingID").AsGuid().NotNullable();

			// Copy current categories to the new table
			Execute.Sql(
			  @"INSERT INTO [dbo].[PaintingCategories]
				   ([PaintingID],[CategoryID])
				SELECT [ID],[CategoryID]
				FROM [dbo].[Paintings]");

			// Update Categories with new columns
			Alter.Table("Categories").InSchema("dbo")
				.AddColumn("Description").AsString(50).Nullable()
				.AddColumn("Active").AsBoolean().NotNullable().WithDefaultValue(1);

			// Get rid of the old foreign key
			Delete.ForeignKey("FK_Paintings_Categories").OnTable("Paintings").InSchema("dbo");

			//Get rid of unused columns
			Delete.Column("CategoryID").FromTable("Paintings").InSchema("dbo");
			Delete.Column("Large").FromTable("Paintings").InSchema("dbo");
			Delete.Column("Small").FromTable("Paintings").InSchema("dbo");
			Delete.Column("FolderName").FromTable("Categories").InSchema("dbo");

			#region Create Foreign Keys
			Create.ForeignKey("FK_PaintingCategories_Categories")
				.FromTable("PaintingCategories").InSchema("dbo").ForeignColumns("CategoryID")
				.ToTable("Categories").InSchema("dbo").PrimaryColumns("ID");

			Create.ForeignKey("FK_PaintingCategories_Paintings")
				.FromTable("PaintingCategories").InSchema("dbo").ForeignColumns("PaintingID")
				.ToTable("Paintings").InSchema("dbo").PrimaryColumns("ID");
			#endregion

			#region Create Indexes
			Create.Index("IX_PaintingCategoriesClustered")
				.OnTable("PaintingCategories").InSchema("dbo")
				.OnColumn("CategoryID").Ascending()
				.OnColumn("PaintingID").Ascending()
				.WithOptions()
				.Clustered();

			Create.PrimaryKey("PK_PaintingCategories")
				.OnTable("PaintingCategories")
				.Column("PaintingCategoriesID")
				.NonClustered();
			#endregion

		}

		public override void Down()
		{
		}
	}
}

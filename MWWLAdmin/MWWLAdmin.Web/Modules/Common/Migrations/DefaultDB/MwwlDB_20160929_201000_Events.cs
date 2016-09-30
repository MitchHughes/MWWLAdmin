using System;
using FluentMigrator;

namespace MWWLAdmin.Migrations.DefaultDB
{
	[Migration(20160929201000)]
	public class MwwlDB_20160929_201000_Events : Migration
	{
		public override void Up()
		{
			Create.Table("Events").InSchema("dbo")
				.WithColumn("EventId").AsInt32()
					.Identity().PrimaryKey().NotNullable()
				.WithColumn("EventName").AsString(200).NotNullable()
				.WithColumn("EventLocation").AsString(200).Nullable()
				.WithColumn("EventLink").AsString(200).Nullable()
				.WithColumn("EventStartDate").AsDateTime().Nullable()
				.WithColumn("EventEndDate").AsDateTime().Nullable()
				.WithColumn("EventActive").AsBoolean().NotNullable().WithDefaultValue(1)
				;
		}

		public override void Down()
		{
			Delete.Table("Events");
		}
	}
}

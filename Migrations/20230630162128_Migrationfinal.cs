using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RoleBasedAuthentication3.Migrations
{
    /// <inheritdoc />
    public partial class Migrationfinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Patient_set",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Reason",
                table: "Patient_set",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Patient_set");

            migrationBuilder.DropColumn(
                name: "Reason",
                table: "Patient_set");
        }
    }
}

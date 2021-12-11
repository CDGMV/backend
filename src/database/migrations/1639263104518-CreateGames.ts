import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGames1639263104518 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "games",
        columns: [
          { name: "id", type: "varchar", isPrimary: true },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "genre",
            type: "varchar",
          },
          {
            name: "ageRestriction",
            type: "int",
          },
          {
            name: "price",
            type: "double",
          },
          {
            name: "platform",
            type: "enum",
            enum: ["PC", "PS4", "XBOX", "Nintendo"],
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "logo",
            type: "varchar",
          },
          {
            name: "users_id",
            type: "varchar",
            isNullable: true,
            default: null,
          },
        ],
        foreignKeys: [
          {
            name: "FKGamesUsers",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["users_id"],
            onUpdate: "CASCADE",
            onDelete: "NO ACTION",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("games");
  }
}

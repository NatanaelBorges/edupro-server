import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialDatabase1685317280205 implements MigrationInterface {
  name = 'InitialDatabase1685317280205';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`Student\` (\`id\` varchar(36) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`createAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted\` tinyint NOT NULL DEFAULT 0, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`Student\``);
  }
}

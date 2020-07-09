import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1593701832614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar', // se for outro banco de dados, utiliza apenas timestamp
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'created_at', // irá informar quando o usuário foi criado
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at', // irá armazenar a ultima vez que o usuário fez alteração
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

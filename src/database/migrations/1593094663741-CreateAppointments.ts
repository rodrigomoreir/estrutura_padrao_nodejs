import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1593094663741
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone', // se for outro banco de dados, utiliza apenas timestamp
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
    await queryRunner.dropTable('appointments');
  }
}

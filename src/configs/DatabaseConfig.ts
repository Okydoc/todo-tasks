import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/TaskEntity';

ConfigModule.forRoot();

const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [TaskEntity],
  logging: Boolean(process.env.DATABASE_LOGGING) || false,
  synchronize: true,
};

export default DatabaseConfig;

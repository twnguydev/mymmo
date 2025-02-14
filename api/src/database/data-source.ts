import { DataSource, DataSourceOptions } from 'typeorm';
import { Tenant } from '@/entities/tenant.entity';
import { Subscription } from '@/entities/subscription.entity';
import { Enterprise } from '@/entities/enterprise.entity';
import { User } from "@/entities/user.entity";

const options: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Tenant, Subscription, Enterprise, User],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
  logging: true
};

export const AppDataSource = new DataSource(options);
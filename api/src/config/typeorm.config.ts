import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Tenant } from '@/entities/tenant.entity';
import { Subscription } from '@/entities/subscription.entity';
import { Enterprise } from '@/entities/enterprise.entity';
import { User } from '@/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Tenant, Subscription, Enterprise, User],
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
};
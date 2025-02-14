import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Tenant } from "@/entities/tenant.entity";
import { Enterprise } from "@/entities/enterprise.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => Tenant, tenant => tenant.users)
  tenant: Tenant;

  @ManyToOne(() => Enterprise, enterprise => enterprise.users)
  enterprise: Enterprise;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
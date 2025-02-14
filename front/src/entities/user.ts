import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { Enterprise } from "./enterprise";
import { Tenant } from "./tenant";

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  ACCOUNTANT = "accountant",
  LAWYER = "lawyer"
}

export enum EnterpriseRole {
  OWNER = "owner",
  MANAGER = "manager",
  EMPLOYEE = "employee",
  ACCOUNTANT = "accountant",
  LAWYER = "lawyer"
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
  })
  role: UserRole;

  @ManyToOne(() => Enterprise, { nullable: true })
  enterprise: Enterprise;

  @Column({
    type: "enum",
    enum: EnterpriseRole,
    nullable: true
  })
  enterprise_role: EnterpriseRole;

  @ManyToOne(() => Tenant, tenant => tenant.users, { nullable: false })
  tenant: Tenant;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
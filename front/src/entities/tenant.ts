import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "./user";
import { Subscription } from "./subscription";
import { Enterprise } from "./enterprise";

export enum TenantType {
  ENTERPRISE = "enterprise",
  INDIVIDUAL = "individual"
}

@Entity("tenants")
export class Tenant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: TenantType
  })
  type: TenantType;

  @OneToOne(() => Enterprise, { nullable: true })
  enterprise: Enterprise;

  @OneToOne(() => User, { nullable: true })
  individual: User;

  @OneToMany(() => User, user => user.tenant)
  users: User[];

  @OneToOne(() => Subscription, subscription => subscription.tenant)
  subscription: Subscription;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
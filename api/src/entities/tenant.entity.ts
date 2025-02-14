import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Subscription } from "@/entities/subscription.entity";
import { Enterprise } from "@/entities/enterprise.entity";

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
  @JoinColumn()
  enterprise: Enterprise;

  @OneToOne(() => User, { nullable: true })
  @JoinColumn()
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
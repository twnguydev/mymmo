import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Tenant } from "@/entities/tenant.entity";

export enum SubscriptionStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  CANCELLED = "cancelled"
}

export enum BillingCycle {
  MONTHLY = "monthly",
  ANNUALLY = "annually"
}

@Entity("subscriptions")
export class Subscription {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => Tenant, tenant => tenant.subscription)
  @JoinColumn()
  tenant: Tenant;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({
    type: "enum",
    enum: BillingCycle,
    default: BillingCycle.MONTHLY
  })
  billing_cycle: BillingCycle;

  @Column({
    type: "enum",
    enum: SubscriptionStatus,
    default: SubscriptionStatus.PENDING
  })
  status: SubscriptionStatus;

  @Column()
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column('json', { nullable: true })
  price_configuration: {
    base_price: number;
    user_count: number;
    discount_rate: number;
    final_price: number;
  };

  @Column('simple-array', { nullable: true })
  features: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
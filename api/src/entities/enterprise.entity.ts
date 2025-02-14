import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { User } from "@/entities/user.entity";

export enum EnterpriseType {
  SARL = "sarl",
  SCI = "sci",
  SASU = "sasu",
  EURL = "eurl",
  SAS = "sas"
}

@Entity("enterprises")
export class Enterprise {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: EnterpriseType
  })
  type: EnterpriseType;

  @Column()
  siren: string;

  @Column({ unique: true })
  siret: string;

  @Column()
  vat_number: string;

  @Column()
  legal_registration_date: Date;

  @Column()
  registered_office_address: string;

  @Column()
  postal_code: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  share_capital: number;

  @Column()
  legal_representative: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  website: string;

  @Column({ type: 'text', nullable: true })
  business_activity: string;

  @Column({ nullable: true })
  naf_code: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @OneToMany(() => User, user => user.enterprise)
  users: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
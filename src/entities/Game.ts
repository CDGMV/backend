import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  import { Exclude } from "class-transformer";
  
  @Entity("games")
  export class User {
    @PrimaryColumn()
    readonly id: string;
  
    @Column()
    name: string;
  
    @Column()
    genre: string;
  
    @Column()
    ageRestriction: bigint;
  
    @Column()
    price: number;  
    
    @Column()
    platform: string;
  
    @Column()
    description: string;  
    
    @Column()
    logo: string;    
      
    @Exclude()
    @Column()
    userId: string; 
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
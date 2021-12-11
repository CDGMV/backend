import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  phone: string;

  @Column()
  photo: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

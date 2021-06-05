import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
} from "typeorm";
import File from "../File";
import bcrypt from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  avatarId: string;

  @ManyToOne(() => File)
  @JoinColumn({ name: "avatarId" })
  avatar: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password?: string;

  @CreateDateColumn({ update: false })
  readonly createdAt: Date;

  @UpdateDateColumn({ update: false })
  readonly updatedAt: Date;

  @DeleteDateColumn({ update: false })
  readonly deletedAt: Date;

  @AfterLoad()
  private loadPassword() {
    Object.defineProperty(this, "_loadedPassword", {
      value: this.password,
      writable: false,
      configurable: true,
      enumerable: false,
    });
  }

  @BeforeInsert()
  @BeforeUpdate()
  private async hashPassword() {
    const loadedPassword = Object.getOwnPropertyDescriptor(this, "_loadedPassword")?.value;
    if (this.password && this.password !== loadedPassword) {
      this.password = await bcrypt.hash(this.password, 8);
    }
  }
}

export default User;

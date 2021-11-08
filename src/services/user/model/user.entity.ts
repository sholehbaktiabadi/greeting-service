import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', name: 'first_name', length: 60 })
  firstName: string;

  @Column({ type: 'varchar', name: 'last_name', length: 60 })
  lastName: string;

  @Column({ type: 'varchar', name: 'local_time', length: 60, nullable: true })
  localTime: string;

  @Column({
    type: 'boolean',
    name: 'isRecieved_this_year',
    select: false,
    default: false,
  })
  isRecieved: boolean;

  @Column({
    name: 'created_at',
    type: 'timestamp with time zone',
    update: false,
    nullable: false,
    default: () => `now()`,
  })
  createdAt: Date;
}

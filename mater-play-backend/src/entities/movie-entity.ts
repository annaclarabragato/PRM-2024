import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  ageRating: string;

  @Column({ nullable: false })
  poster: string;
}
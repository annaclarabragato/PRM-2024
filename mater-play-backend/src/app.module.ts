import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Movie } from './entities/movie-entity';
import { MovieController } from './controllers/movie-controller';
import { MovieService } from './services/movie-service';
import { CategoryService } from './services/category-service';
import { CategoryController } from './controllers/category-controller';
import { Category } from './entities/category-entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [Category, Movie],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Category, Movie]),
  ],
  controllers: [CategoryController, MovieController],
  providers: [CategoryService, MovieService],
})
export class AppModule {}

import { TypeOrmModule } from "@nestjs/typeorm";
import { GenreController } from "./genre-controller";
import { Genre } from "./genre-entity";
import { GenreService } from "./genre-service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Genre])],
    providers: [GenreService],
    controllers: [GenreController]
})
export class GenreModule {}
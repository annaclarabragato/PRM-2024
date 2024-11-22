import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put, Query, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { SupabaseService } from "src/@libs/supabase/supabase.service";
import { Category } from "src/categories/category-entity";
import { Movie } from "src/movies/movie-entity";
import { MovieService } from "src/movies/movie-service";

@Controller('movies')
export class MovieController{

    constructor(
        private readonly service: MovieService,
        private readonly supabaseService: SupabaseService){}

    @Get()
    findAll(@Query('categoryId') categoryId?: string): Promise<Movie[]>{
        if (categoryId){
            return this.service.findByCategory({
                id: Number (categoryId),
            } as Category);
        }
        return this.service.findAll();
    }

    @Get(':id')
    async findById (@Param('id', new ParseUUIDPipe) id: string): Promise<Movie>{
        const found = await this.service.findById(id);

        console.log(found);

        if (!found) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }
        return found

    }

    @Post()
    create(@Body() category: Movie): Promise<Movie> {
        return this.service.save(category);
    }

    @Put(':id')
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() movie): Promise<Movie> {
        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }

        movie.id = found.id;

        return this.service.save(movie);
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {

        const found = await this.service.findById(id);

        if (!found) {
            throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
        }

        return this.service.remove(id);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File){
        if (!file) {
            throw new HttpException('File not found', HttpStatus.NOT_FOUND);
        }

        const result = await this.supabaseService.upload(file)

        if(!result) {
            throw new HttpException('Unable to upload file', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return result;
    }

}
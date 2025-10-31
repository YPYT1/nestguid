import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCatDto } from './dto/CreateCatDto ';

@Controller('cats')
export class CatsController {
    @Post()
    async create(@Body() CreateCatDto: CreateCatDto){
        return 'This action adds a new cat';
    }
    
    @Get()
    async findAll(@Query('age')age: number,@Query('breed')breed:string ) {
        return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
    }
}
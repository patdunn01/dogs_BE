import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  async createDog(
    @Body('id') id: number,
    @Body('breed') breed: string,
    @Body('size') size: string,
    @Body('weight_kg') weight_kg: number,
    @Body('bio') bio: string,
    @Body('childFriendly') childFriendly: string,
    @Body('dogFriendly') dogFriendly: string,
    @Body('image') image: string,
    @Body('script') script: string,
  ) {
    const generatedDogId = await this.dogsService.insertDogs(
      id,
      breed,
      size,
      weight_kg,
      bio,
      childFriendly,
      dogFriendly,
      image,
      script,
    );
    return generatedDogId;
  }
  @Get()
  async getAllDogs() {
    const dogs = await this.dogsService.getDogs();
    return dogs;
  } 

  @Get(':breed')
  getDog(@Param('breed') breed: string,){
    return this.dogsService.getSingleDog(breed);
  }
}

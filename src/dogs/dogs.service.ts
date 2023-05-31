import { Injectable, NotFoundException } from '@nestjs/common';
import { Dog } from './dogs.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DogsService {
  dogs: Dog[] = [];

  constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog>) {}

  async insertDogs(
    id: number,
    breed: string,
    size: string,
    weight_kg: number,
    bio: string,
    childFriendly: string,
    dogFriendly: string,
    image: string,
  ) {
    const dogId = Date.now();
    const newDog = new this.dogModel({
      dogId,
      breed,
      size,
      weight_kg,
      bio,
      childFriendly,
      dogFriendly,
      image,
    });
    const result = await newDog.save();
    console.log(result);
    return result;
  }

  async getDogs() {
    const dogs = await this.dogModel.find().exec()
    return dogs as Dog[];
  }

  async getSingleDog(breed: string){
    const dog = await this.findDog(breed);
    return {
      breed: dog.breed,
      size: dog.size,
      weight_kg: dog.weight_kg,
      bio: dog.bio,
      childFriendly: dog.childFriendly,
      dogFriendly: dog.dogFriendly,
      image: dog.image,
    };
  }

  private async findDog(breed: string): Promise<Dog> {
    let dog;
    try {
      dog = await this.dogModel.findById(breed).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!dog) {
      throw new NotFoundException('Could not find product.');
    }
    return dog;
  }
}

import * as mongoose from 'mongoose';

export const DogSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  size: { type: String, required: true },
  weight_kg: { type: Number, required: true },
  bio: { type: String, required: true },
  childFriendly: { type: String, required: true },
  dogFriendly: { type: String, required: true },
  image: { type: String, required: true },
});

export class Dog {
  constructor(
    public id: number,
    public breed: string,
    public size: string,
    public weight_kg: string,
    public bio: string,
    public childFriendly: string,
    public dogFriendly: string,
    public image: string,
  ) {}
}

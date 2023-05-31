import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DogsModule,
    MongooseModule.forRoot(
      'mongodb+srv://patdunn01:DGgvTkgyf6KF9oLU@dogs0.l7y3cob.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

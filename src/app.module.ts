import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule} from './products/products.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://username:password@cluster0.hzyno.mongodb.net/<products>?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

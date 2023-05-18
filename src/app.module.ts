import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DebugModule } from './debug/debug.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UsersModule, DebugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

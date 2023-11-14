import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { GlobalsModule } from '../globals/globals.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    GlobalsModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

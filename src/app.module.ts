import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GlobalsModule } from './globals/globals.module';

@Module({
  imports: [UserModule, GlobalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

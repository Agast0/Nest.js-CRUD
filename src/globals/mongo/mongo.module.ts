import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot(`mongodb+srv://nestjs:OEHEZlUlKbusgdZr@users.wfpllvc.mongodb.net/?retryWrites=true&w=majority`)],
})
export class MongoModule {}

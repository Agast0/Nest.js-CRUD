import { Global, Module } from '@nestjs/common';
import { MongoModule } from './mongo/mongo.module';
import { HashModule } from './hash/hash.module';

@Global()
@Module({
    imports: [MongoModule, HashModule],
    exports: [MongoModule, HashModule],
})
export class GlobalsModule {}

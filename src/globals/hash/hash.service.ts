import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
    async getHashedPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async isPasswordSameAsHash(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}

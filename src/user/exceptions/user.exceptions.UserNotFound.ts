import { HttpException, HttpStatus } from '@nestjs/common';

export class UserExceptionsUserNotFound extends HttpException {
    constructor() {
        super('User not found.', HttpStatus.NOT_FOUND);
    }
}
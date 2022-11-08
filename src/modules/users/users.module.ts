import { Module } from '@nestjs/common';
import { SignUpController } from './controllers/sign-up.controller';
import { UsersRepository } from './repositories/users.repository';
import { SignUpUseCase } from './use-cases/sign-up.use-case';

@Module({
  controllers: [SignUpController],
  providers: [SignUpUseCase, UsersRepository],
})
export class UsersModule {}

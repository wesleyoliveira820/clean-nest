import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { InputSignUpDTO } from './dtos/sign-up.dto';

@Injectable()
export class SignUpUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(userData: InputSignUpDTO): Promise<void> {
    await this.usersRepository.create(userData);
  }
}

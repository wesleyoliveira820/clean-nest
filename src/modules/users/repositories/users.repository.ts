import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import prisma from 'src/shared/databases/prisma.database';
import { InputCreateUserRepository } from './contracts/create-user.contract';

@Injectable()
export class UsersRepository {
  async create(userData: InputCreateUserRepository): Promise<void> {
    await prisma.user.create({
      data: {
        id: randomUUID(),
        ...userData,
      },
    });
  }
}

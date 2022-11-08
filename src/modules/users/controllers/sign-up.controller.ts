import { Body, Controller, Post } from '@nestjs/common';
import { SignUpUseCase } from '../use-cases/sign-up.use-case';
import { SignUpValidator } from '../validators/sign-up.validator';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  @Post()
  async handle(@Body() requestBody: SignUpValidator): Promise<void> {
    await this.signUpUseCase.execute(requestBody);
  }
}

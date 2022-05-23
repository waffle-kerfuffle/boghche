import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { AttemptTelnoInput } from '../dto/in/attemptTelno.in';
import { ConfirmTelnoInput } from '../dto/in/confirmTelno.in';
import { CreateUserInput } from '../dto/in/createUser.int';
import { DeleteUserInput } from '../dto/in/deleteUser.in';
import { FindUserInput } from '../dto/in/findUser.in';
import { LoginInput } from '../dto/in/login.in';
import { SignupInput } from '../dto/in/signup.in';
import { UserComplete } from '../dto/out/userComplete.out';
import { User } from '../models/user.entity';
import { AccountService } from '../services/account.service';
import { UserService } from '../services/user.service';

@ApiTags('account')
@Controller('account')
export class AccountController {

  constructor(
    private userSv: UserService,
    private accountSv: AccountService,
  ) { }

  @Post('login')
  async login(@Body() loginArgs: LoginInput) {
    return this.accountSv.login(loginArgs);
  }

  @Post('signup')
  async signup(@Body() signupData: SignupInput) {
    return this.accountSv.signup(signupData);
  }

  @Post('confirmTelno')
  async confirmTelno(@Body() confirmTelnoArgs: ConfirmTelnoInput) {
    await this.accountSv.confirmTelno(confirmTelnoArgs);
    return `Code was sent to [${confirmTelnoArgs.telno}]`;
  }

  @Post('attemptTelno')
  async attemptTelno(@Body() attemptTelnoArgs: AttemptTelnoInput) {
    const attempt = this.accountSv.attemptTelno(attemptTelnoArgs);
    if (!attempt) return "Invalid confirmation credentials";

    let user = await this.userSv.findUser({ telno: attemptTelnoArgs.telno });
    user = await this.accountSv.activateUser(user);

    return user;
  }

}
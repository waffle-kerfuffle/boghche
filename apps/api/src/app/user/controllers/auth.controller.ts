import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { AttemptTelnoInput } from '../dto/in/attemptTelno.in';
import { ConfirmTelnoInput } from '../dto/in/confirmTelno.in';
import { CreateUserInput } from '../dto/in/createUser.int';
import { DeleteUserInput } from '../dto/in/deleteUser.in';
import { FindUserInput } from '../dto/in/findUser.in';
import { LoginInput } from '../dto/in/login.in';
import { SignupInput } from '../dto/in/signup.in';
import { LoginOutput } from '../dto/out/login.out';
import { UserComplete } from '../dto/out/userComplete.out';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { User } from '../models/user.entity';
import { AccountService } from '../services/account.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@ApiTags('account')
@Controller('account')
export class AccountController {

  constructor(
    private readonly userSv: UserService,
    private readonly authSv: AuthService,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginArgs: LoginInput): Promise<LoginOutput> {
    return this.authSv.login(loginArgs);
  }

  @Post('signup')
  async signup(@Body() signupData: SignupInput) {
    return this.authSv.signup(signupData);
  }

  @Post('confirmTelno')
  async confirmTelno(@Body() confirmTelnoArgs: ConfirmTelnoInput) {
    await this.authSv.confirmTelno(confirmTelnoArgs);
    return `Code was sent to [${confirmTelnoArgs.telno}]`;
  }

  @Post('attemptTelno')
  async attemptTelno(@Body() attemptTelnoArgs: AttemptTelnoInput) {
    const attempt = await this.authSv.attemptTelno(attemptTelnoArgs);
    if (!attempt) return "Invalid confirmation credentials";

    let user = await this.userSv.findUser({ telno: attemptTelnoArgs.telno });
    user = await this.authSv.activateUser(user);

    return user;
  }

}
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { CreateUserInput } from '../dto/in/createUser.int';
import { DeleteUserInput } from '../dto/in/deleteUser.in';
import { FindUserInput } from '../dto/in/findUser.in';
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

 

}

import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { LoginInput } from "../dto/in/login.in";
import { SignupInput } from "../dto/in/signup.in";
import { User } from "../models/user.entity";
import { UserService } from "./user.service";

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private userSv: UserService,

  ) { }

  async login(@Body() loginArgs: LoginInput): Promise<User> {
    const { telno } = loginArgs;
    const user = await this.userSv.findUser({ telno });

    if (!user.hasId()) throw "Invalid Credentials";

    if (user.pass !== loginArgs.pass) throw "Invalid Credentials";

    return user;
  }

  async signup(@Body() signupData: SignupInput) {

  }

}

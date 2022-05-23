import { Body, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AttemptTelnoInput } from "../dto/in/attemptTelno.in";
import { ConfirmTelnoInput } from "../dto/in/confirmTelno.in";
import { LoginInput } from "../dto/in/login.in";
import { SignupInput } from "../dto/in/signup.in";
import { ConfirmSmsRequest } from "../models/confirmSmsRequest";
import { Role } from "../models/role.enum";
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

    if (!user.hasId()) throw "Invalid login credentials";

    if (user.pass !== loginArgs.pass) throw "Invalid login credentials";

    return user;
  }

  async signup(@Body() signupData: SignupInput): Promise<User> {
    const { telno } = signupData;
    const user = await this.userSv.findUser({ telno });

    if (user.hasId()) throw "User is already registered";

    const createdUser = await this.userSv.createUser(signupData);

    return createdUser;
  }

  confirmSmsRequests: ConfirmSmsRequest[] = []

  /**
   * ask for a new SMS
   */
  async confirmTelno({ telno }: ConfirmTelnoInput): Promise<ConfirmSmsRequest> {

    // generate random string
    const code: string = Math.floor(Math.random() * 9999).toString().padStart(4, '0');

    const newRequest = new ConfirmSmsRequest();
    newRequest.telno = telno;
    newRequest.code = code;

    console.log('[CODE]', code)

    this.confirmSmsRequests.push(newRequest)

    return newRequest
  }

  async attemptTelno({ telno, code }: AttemptTelnoInput): Promise<boolean> {

    const reqindex = this.confirmSmsRequests.findIndex(req => req.telno === telno && req.code === code);
    const success = reqindex > -1;

    if (!success) return false;

    // maybe log into database
    // this.confirmSmsRequests[reqindex].wasSuccessful = true;

    // delete record from memory
    this.confirmSmsRequests.splice(reqindex, 1);

    return true;
  }

  async activateUser(user: User): Promise<User> {
    user.roles.push(Role.User);
    await this.userRepo.update({ id: user.id }, { roles: user.roles });
    return user;
  }

}

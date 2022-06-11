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
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, LoginOutput } from "../dto/out/login.out";
import { UserSafe } from "../dto/out/userSafe.out";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userSv: UserService,
    private readonly jwtSv: JwtService
  ) { }

  /**
   * @param telno 
   * @param pass 
   * @returns { UserSafe } if validation owas successfull, { undefined } if not
   */
  async validateUser(telno: string, pass: string): Promise<UserSafe | undefined> {
    const user = await this.userSv.findUser({ telno });
    if (user && user.pass === pass) {

      return UserSafe.fromEntity(user);
    }
  }

  async login(@Body() { telno, pass }: LoginInput): Promise<LoginOutput> {
    const user = await this.validateUser(telno, pass);

    if (!user) throw "Invalid login credentials";

    const payload: JwtPayload = { username: user.name, sub: user.id }

    return {
      access_token: this.jwtSv.sign(payload)
    };
  }

  async signup(@Body() signupData: SignupInput): Promise<User> {
    const { telno } = signupData;
    const user = await this.userSv.findUser({ telno });

    if (user) throw "User is already registered";

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

    // delete attempts assoicated with the confirmed request
    this.confirmSmsRequests = this.confirmSmsRequests.filter(req => req.telno !== telno);

    return true;
  }

  async activateUser(user: User): Promise<User> {
    user.roles.push(Role.Tourist);
    await this.userSv.userRepo.update({ id: user.id }, { roles: user.roles });
    return user;
  }

}

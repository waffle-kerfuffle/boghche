import { Request, Body, Controller, Delete, Get, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DeleteResult } from "typeorm";
import { CreateUserInput } from "../dto/in/createUser.int";
import { DeleteUserInput } from "../dto/in/deleteUser.in";
import { FindUserInput } from "../dto/in/findUser.in";
import { UserComplete } from "../dto/out/userComplete.out";
import { UserSafe } from "../dto/out/userSafe.out";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { User } from "../models/user.entity";
import { AccountService } from "../services/account.service";
import { UserService } from "../services/user.service";

@ApiTags('user')
@Controller("user")
export class UserController {

  constructor(
    private userSv: UserService,
    private accountSv: AccountService,
  ) { }

  // #region CRUD

  @Get('list')
  async getAllUsers(): Promise<UserSafe[]> {
    const users: User[] = await this.userSv.getAllUsers();

    const res: UserSafe[] = users.map(user => UserSafe.fromEntity(user));
    return res;
  }

  @Post('find')
  async findUser(@Body() findUserArgs: FindUserInput): Promise<UserSafe> {
    const user = await this.userSv.findUser(findUserArgs);

    const res: UserSafe = UserSafe.fromEntity(user);
    return res;
  }

  @Post('search')
  async searchUsers(@Body() findTOurArgs: FindUserInput): Promise<UserSafe[]> {
    const users = await this.userSv.searchUsers(findTOurArgs);

    const res: UserSafe[] = users.map(user => UserSafe.fromEntity(user));
    return res;
  }

  @Post('create')
  async createUser(@Body() createUserData: CreateUserInput): Promise<UserSafe> {
    const user = await this.userSv.createUser(createUserData);

    const res: UserSafe = UserSafe.fromEntity(user);
    return res;
  }

  @Delete('delete')
  async deleteUser(@Body() deleteUserArgs: DeleteUserInput): Promise<DeleteResult> {
    const res = await this.userSv.deleteUser(deleteUserArgs);
    return res;
  }

  // #endregion CRUD

  @UseGuards(JwtAuthGuard)
  @Get('currentUser')
  async whoAmI(@Request() req) {
    return req.user;
  }

}

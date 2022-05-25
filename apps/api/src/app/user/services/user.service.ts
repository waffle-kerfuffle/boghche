import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { CreateUserInput } from "../dto/in/createUser.int";
import { DeleteUserInput } from "../dto/in/deleteUser.in";
import { FindUserInput } from "../dto/in/findUser.in";
import { UpdateUserInput } from "../dto/in/updateUser.in";
import { User } from "../models/user.entity";

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  // #region CRUD

  async createUser(createUserData: CreateUserInput): Promise<User> {

    const newUser = {
      ...new User(),
      ...createUserData,
    }

    const user = await this.userRepo.save(newUser)

    return user;
  }

  async updateUser({ id, ...overrides }: UpdateUserInput): Promise<UpdateResult> {
    
    const res = await this.userRepo.update({ id }, overrides);
    return res;
  }

  async getAllUsers(): Promise<User[]> {
    const user = await this.userRepo.find();
    return user;
  }

  async findUser(findUserArgs: FindUserInput): Promise<User> {
    const user = await this.userRepo.findOne(findUserArgs);
    return user;
  }

  async searchUsers(findUsersArgs: FindUserInput): Promise<User[]> {
    const users = await this.userRepo.find(findUsersArgs);
    return users;
  }

  async deleteUser({ id }: DeleteUserInput): Promise<DeleteResult> {
    const res = await this.userRepo.delete({ id });
    return res;
  }

  // #endregion CRUD

}

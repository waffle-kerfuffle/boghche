import { Injectable, NotImplementedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
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

  async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    throw new NotImplementedException();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findUser(findUserArgs: FindUserInput): Promise<User> {
    return await this.userRepo.findOne(findUserArgs);
  }

  async searchUsers(findUsersArgs: FindUserInput): Promise<User[]> {
    return await this.userRepo.find(findUsersArgs);
  }

  async deleteUser(deleteUserArgs: DeleteUserInput): Promise<DeleteResult> {
    return await this.userRepo.delete(deleteUserArgs);
  }

  // #endregion CRUD

}

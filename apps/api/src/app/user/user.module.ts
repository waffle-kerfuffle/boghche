import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountController } from "./controllers/account.controller";
import { UserController } from "./controllers/user.controller";
import { User } from "./models/user.entity";
import { AccountService } from "./services/account.service";
import { UserService } from "./services/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    UserController,
    AccountController
  ],
  providers: [
    UserService,
    AccountService
  ],
})
export class UserModule { }

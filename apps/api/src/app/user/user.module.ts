import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountController } from "./controllers/auth.controller";
import { UserController } from "./controllers/user.controller";
import { User } from "./models/user.entity";
import { AccountService } from "./services/account.service";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    }),
  ],
  controllers: [
    UserController,
    AccountController
  ],
  providers: [
    AccountService,
    UserService,
    AuthService,
    JwtStrategy,
    LocalStrategy
  ],
  exports: [
    UserService,
    AuthService,
  ]
})
export class UserModule { }

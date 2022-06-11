import { UserSafe } from "./userSafe.out";

export type JwtPayload = { username: string, sub: number }

export class LoginOutput {

  access_token: string

}
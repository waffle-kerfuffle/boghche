import { User } from "../../models/user.entity";
import { UserComplete } from "./userComplete.out";

export class UserSafe extends UserComplete {

  override pass = undefined;

  static fromEntity(user: User): UserSafe {

    delete user.pass

    const res: UserSafe = {
      ...user
    }

    return res;
  }

}

import { User } from "../../models/user.entity"

export class UserComplete {

  id: number

  name: string

  avatarUrl: string

  telno: string

  constructor({ id, name, avatarUrl, telno }: UserComplete) {
    this.id = id;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.telno = telno;
  }

  static fromEntity(user: User): UserComplete {
    return new UserComplete({...user})
  }

}
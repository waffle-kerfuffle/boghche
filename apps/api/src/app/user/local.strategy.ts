import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserSafe } from './dto/out/userSafe.out';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly authSv: AuthService
  ) { super(); }

  /**
   * @param username 
   * @param pass 
   * @returns user data with the pass removed
   * @throws { UnauthorizedException } if validation fails
   */
  async validate(username: string, pass: string): Promise<UserSafe> {
    const user = await this.authSv.validateUser(username, pass);
    if (!user)
      throw new UnauthorizedException();

    return user;
  }
  
}
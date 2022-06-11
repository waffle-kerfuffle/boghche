
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

  constructor() {
    super();
  }

  handleRequest<TUser = any>(err: any, user: any, info: any, context: any, status?: any): TUser {
    const res = super.handleRequest(err, user, info, context, status);
    console.log('[LocalAuthGuard]', 'handleRequest', res);
    return res;
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const res = super.canActivate(context);
    console.log('[LocalAuthGuard]', 'canActivate', res);
    return res;
  }

  logIn<TRequest extends { logIn: Function; } = any>(request: TRequest): Promise<void> {
    const res = super.logIn(request);
    console.log('[LocalAuthGuard]', 'logIn', res);
    return res;
  }

}
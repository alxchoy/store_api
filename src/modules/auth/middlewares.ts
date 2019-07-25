import Token from '../../../lib/token';

export default class AuthMiddlewares {
  public constructor() {}

  public validatToken(req, res, next): void {
    console.log(req.headers);
    next();
  }
}

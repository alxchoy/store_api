import * as jwt from 'jsonwebtoken';

export default class Token {
  private userData: object;
  private secretKey: string = 'abcde12345';
  private token: string;

  public constructor(userData) {
    this.userData = userData;
  }

  public generate(): void {
    const token = jwt.sign(this.userData, this.secretKey, {
      expiresIn: '1h',
      subject: 'choy'
    });

    this.token = token;
  }

  public validate(): Promise<object> {
    return new Promise((resolve, reject): void => {
      jwt.verify(this.token, this.secretKey, (err, decoded): void => {
        if (err) {
          return reject(err);
        }

        resolve(decoded);
      });
    });
  }

  public getToken(): string {
    return this.token;
  }
}

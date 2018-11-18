import * as Oauth2Server from 'oauth2-server';
import { AuthController } from '../controllers/authController';
import { UserController } from '../controllers/userController';


export class AuthRoutes {

 public authController: AuthController = new AuthController();
 public userController: UserController = new UserController();


  public routes(app): void {

    const oauth: Oauth2Server = new Oauth2Server({
      model: {
        getAccessToken: this.authController.getAccessToken,
        getRefreshToken: this.authController.getRefreshToken,
        getClient: this.authController.getClient,
        getUser: this.userController.getUser,
        saveToken: this.authController.saveToken,
        revokeToken: this.authController.revokeToken
      }
    });

    app.all('/oauth/token', async (req, res, next) => {
      const request = new Oauth2Server.Request(req);
      const response = new Oauth2Server.Response(res);
      try {
        const token = await oauth.token(request, response)
        res.set(response.headers);
        res.json(response.body)
      } catch(ex) {
        next(ex);
      }
    });


  }
}


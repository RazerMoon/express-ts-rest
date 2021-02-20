import express from "express";
import { Server } from "typescript-rest";

export class ApiServer {
  public PORT: number = Number(process.env.PORT) || 3000;

  private readonly app: express.Application;
  private server: Server | undefined

  constructor() {
      this.app = express();

      Server.loadServices(this.app, 'controllers/*', __dirname);
      Server.swagger(this.app, { filePath: './dist/swagger.json' });
  }

  /**
   * Start the server
   */
  public async start() {
      return new Promise<void>((resolve) => {
          this.server = this.app.listen(this.PORT, () => {
              console.log(`Listening to http://127.0.0.1:${this.PORT}`)

              return resolve()
          });
      });

  }
}

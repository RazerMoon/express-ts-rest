import { Response } from "express";
import { ContextResponse, GET, Path } from "typescript-rest";

@Path("error")
export default class ErrorService {
  @GET
  returnError(@ContextResponse res: Response) {
    res.status(400);
    return { message: "Didn't work :(" };
  }
}

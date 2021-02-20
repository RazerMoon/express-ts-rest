import { GET, Path, PathParam } from "typescript-rest";
import { Example, Response } from "typescript-rest-swagger";

@Path("hello")
export default class HelloService {
  @Response<string>(200, "Receive a greeting.")
  @Response<{ message: string }>(400, "Receive a 400 error.")
  @Path(":name")
  @GET
  sayHello(@PathParam("name") name: string) {
    return "Hello " + name;
  }
}

import express, {Request, Response} from 'express';
import GreetUseCase from "./../usecase/greet/GreetUseCase";
import GreetRequest from "./../usecase/greet/GreetRequest";
import GreetExpressJsonPresenter from "./presenter/GreetExpressJsonPresenter";
import GreetRequestValidator from "../usecase/greet/GreetRequestValidator";

export const app: express.Application = express();
const port = 8080;
app.disable("x-powered-by")

app.get("/:name", (req: Request, res: Response) => {
    const presenter = new GreetExpressJsonPresenter(res)
    const validator = new GreetRequestValidator()
    const usecase = new GreetUseCase(presenter, validator)
    const request = new GreetRequest(req.params.name)

    usecase.execute(request)
});

app.listen(port);

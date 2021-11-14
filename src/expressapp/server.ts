import express, {NextFunction, Request, Response} from 'express';
import GreetUseCase from "./../usecase/greet/GreetUseCase";
import GreetRequest from "./../usecase/greet/GreetRequest";
import GreetExpressJsonPresenter from "./presenter/GreetExpressJsonPresenter";
import GreetRequestValidator from "../usecase/greet/GreetRequestValidator";

export const app: express.Application = express();
const port = 8080;
app.disable("x-powered-by")

app.get("/:name", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const presenter = new GreetExpressJsonPresenter(res)
        const validator = new GreetRequestValidator()
        const usecase = new GreetUseCase(presenter, validator)
        const request = new GreetRequest(req.params.name)

        usecase.execute(request)
    } catch (e) {
        next(e)
    }
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

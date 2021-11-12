import express, { Request, Response } from 'express';
import GreetUseCase from "./../usecase/greet/GreetUseCase";
import GreetRequest from "./../usecase/greet/GreetRequest";
import GreetExpressJsonPresenter from "./presenter/GreetExpressJsonPresenter";

const app: express.Application = express();
const port = 8080;
app.disable("x-powered-by")

app.get("/", (req: Request, res: Response) => {
    const presenter = new GreetExpressJsonPresenter(res)
    const usecase = new GreetUseCase(presenter)
    const request = new GreetRequest("Christian Bergau")

    usecase.execute(request)
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

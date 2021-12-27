import express, {Request, Response} from 'express';
import PostgresProductRepository from "../repository/PostgresProductRepository";
import FindProductJsonPresenter from "./presenter/FindProductJsonPresenter";
import FindProductUseCase from "../usecase/findproduct/FindProductUseCase";
import CreateProductUseCase from "../usecase/createproduct/CreateProductUseCase";
import CreateProductJsonPresenter from "./presenter/CreateProductJsonPresenter";

export const app = express();
app.disable("x-powered-by")
app.use(express.json())

app.get("/products/:id", async (request: Request, response: Response) => {
    const repository = new PostgresProductRepository()
    const presenter = new FindProductJsonPresenter(response)
    const usecase = new FindProductUseCase(presenter, repository)
    await usecase.execute(parseInt(request.params.id))
})

app.post("/products", async (request: Request, response: Response) => {
    const repository = new PostgresProductRepository()
    const presenter = new CreateProductJsonPresenter(response)
    const usecase = new CreateProductUseCase(presenter, repository)
    await usecase.execute(request.body.name)
})

app.listen(8080);

import CreateProductPresenter from "../../usecase/createproduct/CreateProductPresenter";
import {Response} from "express";

export default class CreateProductJsonPresenter implements CreateProductPresenter {
    private response: Response

    constructor(response: Response) {
        this.response = response;
    }

    present(id: Number, name: String): void {
        this.response.status(201).json({id, name})
    }

    error(error: String): void {
        this.response.status(500).json({error})
    }
}

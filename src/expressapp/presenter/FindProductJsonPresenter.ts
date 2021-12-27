import {Response} from "express";
import FindProductPresenter from "../../usecase/findproduct/FindProductPresenter";

export default class FindProductJsonPresenter implements FindProductPresenter {
    private readonly response: Response

    constructor(response: Response) {
        this.response = response
    }

    present(id: Number, name: String) {
        this.response.status(200).json({id, name})
    }
}

import GreetPresenter from "../../usecase/greet/GreetPresenter";
import {Response} from "express";

export default class GreetExpressJsonPresenter implements GreetPresenter {
    readonly response: Response

    constructor(response: Response) {
        this.response = response;
    }

    present(message: string) {
        this.response.json({message: message})
    }

    presentValidationErrors(errors: Map<string, Array<string>>): void {
        this.response.status(400).send(JSON.stringify(Array.from(errors.entries())))
    }
}

import GreetPresenter from "../../usecase/greet/GreetPresenter";
import {Response} from "express";

export default class GreetExpressJsonPresenter implements GreetPresenter {
    readonly response: Response

    constructor(response: Response) {
        this.response = response;
    }

    present(message: string) {
        this.response.send(JSON.stringify({message: message}))
    }
}

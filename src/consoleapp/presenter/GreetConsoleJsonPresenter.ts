import GreetPresenter from "../../usecase/greet/GreetPresenter";

export default class GreetConsoleJsonPresenter implements GreetPresenter {

    presentValidationErrors(errors: Map<string, Array<string>>): void {
        console.error(JSON.stringify(Array.from(errors.entries())))
    }

    present(message: string) {
        console.log(JSON.stringify({message: message}));
    }
}

import GreetPresenter from "../../usecase/greet/GreetPresenter";

export default class GreetConsoleJsonPresenter implements GreetPresenter {
    present(message: string) {
        console.log(JSON.stringify({message: message}));
    }
}

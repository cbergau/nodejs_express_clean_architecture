import GreetUseCase from "../usecase/greet/GreetUseCase";
import GreetRequest from "../usecase/greet/GreetRequest";
import GreetConsoleJsonPresenter from "./presenter/GreetConsoleJsonPresenter";
import GreetRequestValidator from "../usecase/greet/GreetRequestValidator";

export default class App {
    main(): void {
        const presenter = new GreetConsoleJsonPresenter()
        const validator = new GreetRequestValidator()
        const usecase = new GreetUseCase(presenter, validator)
        const request = new GreetRequest("Christian Bergau")

        usecase.execute(request)
    }
}

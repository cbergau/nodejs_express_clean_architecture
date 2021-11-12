import GreetUseCase from "../usecase/greet/GreetUseCase";
import GreetRequest from "../usecase/greet/GreetRequest";
import GreetConsoleJsonPresenter from "./presenter/GreetConsoleJsonPresenter";

const presenter = new GreetConsoleJsonPresenter()
const usecase = new GreetUseCase(presenter)
const request = new GreetRequest("Christian Bergau")

usecase.execute(request)

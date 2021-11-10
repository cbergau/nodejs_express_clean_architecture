import GreetPresenter from "./GreetPresenter";
import GreetRequest from "./GreetRequest";

export default class GreetUseCase {
    readonly presenter: GreetPresenter

    constructor(presenter: GreetPresenter) {
        this.presenter = presenter;
    }

    execute(request: GreetRequest) {
        this.presenter.present("Hello, " + request.name)
    }
}

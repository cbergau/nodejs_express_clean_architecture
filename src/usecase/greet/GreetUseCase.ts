import GreetPresenter from "./GreetPresenter";
import GreetRequest from "./GreetRequest";
import GreetRequestValidator from "./GreetRequestValidator";

export default class GreetUseCase {
    readonly presenter: GreetPresenter
    readonly validator: GreetRequestValidator

    constructor(presenter: GreetPresenter, validator: GreetRequestValidator) {
        this.presenter = presenter;
        this.validator = validator;
    }

    execute(request: GreetRequest) {
        if (!this.validator.isValid(request)) {
            this.presenter.presentValidationErrors(this.validator.errors)
            return
        }

        this.presenter.present("Hello, " + request.name)
    }
}

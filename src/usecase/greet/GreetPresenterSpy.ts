import GreetPresenter from "./GreetPresenter";

export default class GreetPresenterSpy implements GreetPresenter {
    public errors: Map<string, Array<string>> = new Map<string, Array<string>>();
    public message: string = ''

    present(message: string): void {
        this.message = message
    }

    presentValidationErrors(errors: Map<string, Array<string>>): void {
        this.errors = errors
    }
}

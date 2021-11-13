export default interface GreetPresenter {
    present(message: string): void
    presentValidationErrors(errors: Map<string, Array<string>>): void
}

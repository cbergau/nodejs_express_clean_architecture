import GreetConsoleJsonPresenter from "./GreetConsoleJsonPresenter";
import {expect} from '@jest/globals';

describe("Present Greeting via console", () => {
    it("should present name as json", () => {
        console.log = jest.fn();
        const presenter: GreetConsoleJsonPresenter = new GreetConsoleJsonPresenter()
        const message = "Hello, Christian Bergau";

        presenter.present(message)

        expect(console.log).toHaveBeenCalledWith(JSON.stringify({message: message}));
    })

    it("should present validation errors as json", () => {
        console.error = jest.fn();
        const presenter: GreetConsoleJsonPresenter = new GreetConsoleJsonPresenter()

        const errors = new Map<string, Array<string>>()
        errors.set("name", ["some error"])

        presenter.presentValidationErrors(errors)

        expect(console.error).toHaveBeenCalledWith(`[["name",["some error"]]]`);
    })
})

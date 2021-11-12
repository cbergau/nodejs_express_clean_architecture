import GreetConsoleJsonPresenter from "./GreetConsoleJsonPresenter";
import {expect} from '@jest/globals';

describe("Present Greeting via console", () => {
    describe("presents normal name", () => {
        it("should present name as json", () => {
            console.log = jest.fn();
            const presenter: GreetConsoleJsonPresenter = new GreetConsoleJsonPresenter()
            const message = "Hello, Christian Bergau";

            presenter.present(message)

            expect(console.log).toHaveBeenCalledWith(JSON.stringify({message: message}));
        })
    })
})

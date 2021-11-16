import GreetRequest from "./GreetRequest";
import GreetRequestValidator from "./GreetRequestValidator";
import GreetUseCase from "./GreetUseCase";
import GreetPresenterSpy from "./GreetPresenterSpy";

describe("Greet UseCase", () => {
    it("should present validation error if request is invalid", () => {
        const request = new GreetRequest("C")
        const validator = new GreetRequestValidator()
        const presenter = new GreetPresenterSpy()
        const usecase = new GreetUseCase(presenter, validator)

        usecase.execute(request)

        expect(presenter.errors.size).toBe(1)
        expect(presenter.errors.get("name")).toEqual(["length need to be between 2 and 40"])
    })

    it("should present message if request is valid", () => {
        const request = new GreetRequest("Christian")
        const validator = new GreetRequestValidator()
        const presenter = new GreetPresenterSpy()
        const usecase = new GreetUseCase(presenter, validator)

        usecase.execute(request)

        expect(presenter.errors.size).toBe(0)
        expect(presenter.message).toEqual("Hello, Christian")
    })
})

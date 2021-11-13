import GreetRequestValidator from "./GreetRequestValidator";
import GreetRequest from "./GreetRequest";

describe("Greet Request Validation", () => {
    it("should return false if name is too short", () => {
        const validator = new GreetRequestValidator()
        const request = new GreetRequest("C")

        const result = validator.isValid(request)

        expect(result).toBeFalsy()
        expect(validator.errors.size).toBe(1)
        expect(validator.errors.get("name")).toBeDefined()
        // @ts-ignore
        expect(validator.errors.get("name").length).toBe(1)
        // @ts-ignore
        expect(validator.errors.get("name")[0]).toBe("length need to be between 2 and 40")
    })

    it("should return true if name is valid", () => {
        const validator = new GreetRequestValidator()
        const request = new GreetRequest("Christian Bergau")

        const result = validator.isValid(request)

        expect(result).toBeTruthy()
        expect(validator.errors.size).toBe(0)
    })
})

import GreetRequest from "./GreetRequest";
import validator from "validator";

export default class GreetRequestValidator {
    errors: Map<string, Array<string>> = new Map<string, Array<string>>()

    public isValid(request: GreetRequest): boolean {
        this.errors = new Map<string, Array<string>>()

        if (!validator.isLength(request.name, {min: 2, max: 40})) {
            this.errors.set("name", ["length need to be between 2 and 40"])
        }

        return this.errors.size === 0;
    }
}

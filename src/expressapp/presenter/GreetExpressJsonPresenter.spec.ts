import GreetExpressJsonPresenter from "./GreetExpressJsonPresenter";
import GreetPresenter from "../../usecase/greet/GreetPresenter";
import {Response} from "express";
import {expect} from '@jest/globals';

describe("Present Greeting via Express in JSON format", () => {
    describe("presents normal name", () => {
        it("should send contents and 200 status code", () => {
            let responseObject = {};
            const mockResponse: Partial<Response> = {
                json: jest.fn().mockImplementation((result) => {
                    responseObject = result;
                })
            };
            const presenter: GreetPresenter = new GreetExpressJsonPresenter(mockResponse as Response)
            const message = "Hello, Christian Bergau";

            presenter.present(message)

            expect(responseObject).toEqual({message: message})
        })
    })
})

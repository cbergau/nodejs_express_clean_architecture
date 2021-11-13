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

    describe("invalid request", () => {
        it("should send errors messages and 400 status code", () => {
            let bodySent;

            const mockResponse: Partial<Response> = {
                status: jest.fn()
            };

            const mockResponseSent = {
                send: jest.fn().mockImplementation((body) => {
                    bodySent = body
                }),
                statusCode: 0
            }

            mockResponse.status = jest.fn().mockImplementation((status) => {
                mockResponseSent.statusCode = status
                return mockResponseSent
            })

            const presenter: GreetPresenter = new GreetExpressJsonPresenter(mockResponse as Response)
            const errors = new Map<string, Array<string>>()
            errors.set("name", ["some error"])

            presenter.presentValidationErrors(errors)

            expect(mockResponseSent.statusCode).toEqual(400)
            expect(bodySent).toEqual(`[["name",["some error"]]]`)
        })
    })
})

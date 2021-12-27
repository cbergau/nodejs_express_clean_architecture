import {Response} from "express";
import {expect} from '@jest/globals';
import CreateProductJsonPresenter from "./CreateProductJsonPresenter";

describe("Present created product via Express in JSON format", () => {
    it("should send contents and 200 status code", () => {
        let bodySent;

        const mockResponse: Partial<Response> = {
            status: jest.fn()
        };

        const mockResponseSent = {
            json: jest.fn().mockImplementation((body) => {
                bodySent = body
            }),
            statusCode: 0
        }

        mockResponse.status = jest.fn().mockImplementation((status) => {
            mockResponseSent.statusCode = status
            return mockResponseSent
        })

        const presenter = new CreateProductJsonPresenter(mockResponse as Response)

        presenter.present(1, 'Clean Architecture')

        expect(bodySent).toEqual({id: 1, name: 'Clean Architecture'})
    })
})

import App from "./index";

describe("Console Application", () => {
    it("Will display the greeting", () => {
        console.log = jest.fn()
        const app: App = new App()
        app.main()
        expect(console.log).toHaveBeenCalledWith('{"message":"Hello, Christian Bergau"}')
    })
})

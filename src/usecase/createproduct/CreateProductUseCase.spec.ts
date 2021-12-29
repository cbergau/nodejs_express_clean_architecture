import CreateProductUseCase from "./CreateProductUseCase";
import CreateProductPresenter from "./CreateProductPresenter";
import ProductRepositoryMock from "../../repository/ProductRepositoryMock";

test("Should present created product", async () => {
    let presenter: CreateProductPresenter = {
        present: jest.fn()
    }

    const repository = new ProductRepositoryMock()
    const usecase = new CreateProductUseCase(presenter, repository)

    await usecase.execute("test")

    expect(presenter.present).toHaveBeenCalledWith(repository.mockId, "test")
    expect(presenter.present).toHaveBeenCalledTimes(1)
})

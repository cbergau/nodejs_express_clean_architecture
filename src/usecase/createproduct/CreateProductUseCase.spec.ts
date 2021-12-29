import CreateProductUseCase from "./CreateProductUseCase";
import CreateProductPresenter from "./CreateProductPresenter";
import ProductRepository from "../../repository/ProductRepository";
import Product from "../../entity/Product";

test("Should present created product", async () => {
    const presenter: CreateProductPresenter = {
        present: jest.fn()
    }

    const repository: ProductRepository = {
        findById: jest.fn(),
        create: jest.fn(async (product: Product) => {
            product.id = 5
            return Promise.resolve(product)
        })
    }
    const usecase = new CreateProductUseCase(presenter, repository)

    await usecase.execute("test")

    expect(presenter.present).toHaveBeenCalledWith(5, "test")
    expect(presenter.present).toHaveBeenCalledTimes(1)
    expect(repository.create).toHaveBeenCalledTimes(1)
})

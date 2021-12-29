import FindProductUseCase from "./FindProductUseCase";
import FindProductPresenter from "./FindProductPresenter";
import ProductRepository from "../../repository/ProductRepository";
import Product from "../../entity/Product";

test("Should present found product", async () => {
    const product = new Product(2, "Clean Architecture")

    let presenter: FindProductPresenter = {
        present: jest.fn()
    }

    let repository: ProductRepository = {
        findById: jest.fn(async () => {
            return product
        }),
        create: jest.fn()
    }

    const usecase = new FindProductUseCase(presenter, repository)

    await usecase.execute(2)

    expect(repository.findById).toHaveBeenCalledWith(2)
    expect(repository.findById).toHaveBeenCalledTimes(1)
    expect(presenter.present).toHaveBeenCalledWith(2, "Clean Architecture")
    expect(presenter.present).toHaveBeenCalledTimes(1)
})

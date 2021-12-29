import FindProductUseCase from "./FindProductUseCase";
import FindProductPresenter from "./FindProductPresenter";
import ProductRepositoryMock from "../../repository/ProductRepositoryMock";

test("Should present found product", async () => {
    let presenter: FindProductPresenter = {
        present: jest.fn()
    }

    const repository = new ProductRepositoryMock()
    const usecase = new FindProductUseCase(presenter, repository)

    await usecase.execute(1)

    //expect(repository.findById).toHaveBeenCalledWith(1)
    //expect(repository.findById).toHaveBeenCalledTimes(1)
    expect(presenter.present).toHaveBeenCalledWith(repository.mockId, repository.mockName)
    expect(presenter.present).toHaveBeenCalledTimes(1)
})

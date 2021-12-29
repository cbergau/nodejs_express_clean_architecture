import CreateProductUseCase from "./CreateProductUseCase";
import CreateProductPresenter from "./CreateProductPresenter";
import ProductRepositoryMock from "../../repository/ProductRepositoryMock";

test("Should present created product", async () => {
    let idCalled: Number = 0
    let nameCalled: String = ''

    const presenter = <CreateProductPresenter>{
        present(id: Number, name: String) {
            idCalled = id
            nameCalled = name
        }
    }

    const repository = new ProductRepositoryMock()
    const usecase = new CreateProductUseCase(presenter, repository)

    await usecase.execute("test")

    expect(idCalled).toBe(repository.mockId)
    expect(nameCalled).toBe("test")
})

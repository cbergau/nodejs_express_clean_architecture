import CreateProductPresenter from "./CreateProductPresenter";
import ProductRepository from "../../repository/ProductRepository";
import Product from "../../entity/Product";

export default class CreateProductUseCase {
    private readonly presenter: CreateProductPresenter
    private readonly repository: ProductRepository

    constructor(presenter: CreateProductPresenter, repository: ProductRepository) {
        this.presenter = presenter;
        this.repository = repository;
    }

    async execute(name: String) {
        //@todo find a better solution than passing 0 as id (no overloading possible in tsc)
        const product = new Product(0, name)
        await this.repository.create(product)
        this.presenter.present(product.id, product.name)
    }
}

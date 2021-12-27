import ProductRepository from "../../repository/ProductRepository";
import FindProductPresenter from "./FindProductPresenter";

export default class FindProductUseCase {
    private readonly presenter: FindProductPresenter
    private readonly repository: ProductRepository

    constructor(presenter: FindProductPresenter, repository: ProductRepository) {
        this.presenter = presenter
        this.repository = repository
    }

    public async execute(id: Number) {
        const product = await this.repository.findById(id)
        this.presenter.present(product.id, product.name)
    }
}

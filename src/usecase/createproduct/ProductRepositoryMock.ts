import ProductRepository from "../../repository/ProductRepository";
import Product from "../../entity/Product";

export default class ProductRepositoryMock implements ProductRepository {
    public readonly mockId: Number = 1
    public readonly mockName: String = 'test'

    create(product: Product): Promise<Product> {
        product.id = this.mockId
        return Promise.resolve(product);
    }

    findById(id: Number): Promise<Product> {
        return Promise.resolve(new Product(this.mockId, this.mockName));
    }
}

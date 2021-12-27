import Product from "../entity/Product";

export default interface ProductRepository {
    findById(id: Number): Promise<Product>
    create(product: Product): Promise<Product>
}

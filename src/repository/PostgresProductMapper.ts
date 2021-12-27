import Product from "../entity/Product";

export default class PostgresProductMapper {
    public toEntity(row: any): Product {
        return new Product(row.product_id, row.name)
    }
}

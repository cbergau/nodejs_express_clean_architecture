import Product from "../entity/Product";
import PostgresProductMapper from "./PostgresProductMapper";
import ProductRepository from "./ProductRepository";

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'postgres',
    port: 5438
})

export default class PostgresProductRepository implements ProductRepository {
    private mapper: PostgresProductMapper = new PostgresProductMapper()

    async findById(id: Number): Promise<Product> {
        return pool.query('SELECT * FROM product WHERE product_id = ' + id)
            .then((resultSet: { rows: any[]; }) => {
                return this.mapper.toEntity(resultSet.rows[0])
            })
    }

    async create(product: Product): Promise<Product> {
        return pool.query(`INSERT INTO product(product_id, name) VALUES (nextval('product_product_id_seq'), $1) RETURNING product_id`, [product.name])
            .then((resultSet: { rows: any[]; }) => {
                product.id = resultSet.rows[0].product_id
            })
    }
}

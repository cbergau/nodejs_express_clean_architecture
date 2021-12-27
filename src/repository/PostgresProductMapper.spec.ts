import PostgresProductMapper from "./PostgresProductMapper";

describe("PostgresProductMapper", () => {
    it("Should return Product entity from ResultSet", () => {
        const mapper = new PostgresProductMapper()
        const product = mapper.toEntity({product_id: 1, name: 'test'})
        expect(product.id).toBe(1)
        expect(product.name).toBe('test')
    })
})

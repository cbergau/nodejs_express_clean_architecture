export default interface CreateProductPresenter {
    present(id: Number, name: String): void

    error(error: String): void;
}

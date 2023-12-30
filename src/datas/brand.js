// Les Brands (marques) de produits

export default class Brand {

    constructor({id = '', brandName = '', products = []}) {
        this.id = id
        this.brandName = brandName
        this.products = products
    }

}
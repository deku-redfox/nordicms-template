// Un produit

export default class Product {

    constructor({id = '', productName = '', productLogo = '', description = [], itemList = []}) {
        this.id = id
        this.productName = productName
        this.productLogo = productLogo
        this.description = description
        this.itemList = itemList
    }

}
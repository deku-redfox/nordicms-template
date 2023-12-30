// Un produit

export default class Product {

    constructor({id = '', productName = '', productId = '', tsxCode = '', quantity = '', volume = ''}) {
        this.id = id
        this.productName = productName,
        this.productId = productId
        this.tsxCode = tsxCode
        this.quantity = quantity
        this.volume = volume
    }

}
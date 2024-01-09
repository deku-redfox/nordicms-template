// Un element d'un produit

export default class ProductItem {

    constructor({id = '', productName = '', productId = '', thumbUrl = '', tsxCode = '', description = '',
        quantity = '', volume = ''}) {
        this.id = id
        this.productName = productName
        this.productId = productId
        this.thumbUrl = thumbUrl
        this.description = description
        this.tsxCode = tsxCode
        this.quantity = quantity
        this.volume = volume
    }

}
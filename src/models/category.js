// Les diverses categories de produits (Aesthetics, Orthopedics, Skincare, Miscellaneous)

export default class Category {

    constructor({type = '', brands = []}) {
        this.type = type
        this.brands = brands
    }
}
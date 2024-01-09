import products from "../datas/products";

export function getProduct(brand) {
    const product = products.find(e => e.productName === brand);
    return product;
}
// Il s'agit de la page d'un produit en particulier
// :productName est la valeur dynamique du nom du produit passe comme param a l'url
// Route: /product/:productName

import { useLoaderData } from "react-router-dom";
import { getProduct } from "../api/api";
import BrandDetail from "../components/BrandDetail";
import SelectBrand from "../components/SelectBrand";

export async function loader({ params }) {
    const product = getProduct(params.productName)
    return { product }
}

export default function Product() {
    const { product } = useLoaderData()

    return (
        <main>
            
            <BrandDetail title={product.productName} thumbUrl={product.productLogo} description={product.description} />

            <SelectBrand />

            <section className="py-16">

                <div className="container">

                    <div className="grid max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 items-start">

                        {
                            product.itemList.map(item => (
                                <div key={item.id} className="flex flex-col space-y-1 mr-[16%] mb-12">
                                    <figure>
                                        <img src={item.thumbUrl} alt={item.productName + 'image'} className="w-full" />
                                    </figure>
                                    <h4>
                                        {item.productName.toUpperCase()}
                                    </h4>
                                    <p className="text-[13px]">
                                        Product ID: {item.productId}
                                    </p>
                                    <p className="text-[13px]">
                                        {item.quantity} x {item.volume}
                                    </p>
                                    <p className="space-y-4 text-sm font-normal text-justify leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </section>

        </main>
    )
}
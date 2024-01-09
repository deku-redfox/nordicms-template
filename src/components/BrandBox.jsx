// Presentation de la liste de Brand d'une categorie

import BrandItem from "./BrandItem";

export default function BrandBox({
    brandList = []
}) {

    return (
        <section id="brands" className="bg-primary-light py-20">

            <div className="container">

                <div className="flex flex-col space-y-10">

                    <h3 className="text-white text-center">
                        CLICK ON EACH BRAND TO VIEW PRODUCT SELECTION
                    </h3>

                    <div className="grid max-sm:grid-cols-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-items-center">
                        {
                            brandList.map(brand => (
                                <BrandItem key={brand.id} brandName={brand.brandName} brandLogo={brand.brandLogo}/>
                            ))
                        }
                    </div>

                </div>

            </div>

        </section>
    )
    
}
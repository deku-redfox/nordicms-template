// Dropdown proposant les autres brand d'une categorie
// Ce component se trouve dans la page de detail d'un produit

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import products from "../datas/products";

export default function SelectBrand() {

    return (
        <section className="bg-primary-light py-6">

            <div className="container">

                <div className="relative flex justify-center">
                    <Link to='#' className="text-white text-sm space-x-2 font-normal mt-2
                        hover:opacity-40 peer">
                        <span>SELECT OTHER BRAND</span>
                        <FontAwesomeIcon icon={faChevronDown} size="xs"/>
                    </Link>
                    
                    <div className="absolute top-12 bg-secondary py-6 hidden grid-cols-4 w-[80%]
                        peer-hover:grid">
                        
                        {
                            products.map((e, i) => (
                                <Link key={i} to={`product/${e.productName}`} className="pb-1 pl-4 mr-[20%] mb-2
                                    border-b border-b-primary-dark/5 text-sm font-bold">
                                    {e.productName.toUpperCase()}
                                </Link>
                            ))
                        }
                        
                    </div>
                </div>

            </div>

        </section>
    )
    
}
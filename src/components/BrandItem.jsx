// Element montrant le titre d'une Brand

import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function BrandItem({
    brandName = '',
    brandLogo = '',
}) {

    return (
        <Link to={`/product/${brandName.toLowerCase()}`} className="px-[15%] lg:px-[10%] mb-9 
            flex items-center justify-center relative group" title={brandName}>
            <img src={brandLogo} alt={brandName.toLowerCase() + 'logo'} className="duration-200
                group-hover:opacity-20"/>
            <FontAwesomeIcon icon={faCubes} color="white" size="2xl" className="absolute hidden group-hover:block"/>
        </Link>
    )

}
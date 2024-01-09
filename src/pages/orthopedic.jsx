// Route: /orthopedic-products

import BrandBox from '../components/BrandBox'
import CategoryShodown from '../components/CategoryShodown'
import ContactBox from '../components/ContactBox'
import { orthopedicBrands } from '../datas/brands'
import orthopedicSilder from './../assets/ressources/orthopedic-slider.png'

export default function Orthopedic() {

    return (
        <main>

            <CategoryShodown categoryImg={orthopedicSilder} categoryTitle='Orthopedics Products'>
                <p>
                    Nordic Medical Solutions has many years of experience in the international aesthetic industry, 
                    which gives us a strong purchasing power. This makes us able to maintain a wide range of the 
                    most popular orthopedics available on the European market.
                </p>
                <p>
                    Our suppliers include e.g. Genzyme, Feering and Anika Therapeutics just to mention a few and we 
                    carry a full range of their most popular products such as Synvisc, Cingal and Orthovisc
                </p>
                <p>
                    If you would like to place an order, get in touch through the <b>contact formula</b> &ndash; all enquiries 
                    are handled within 24 working hours.
                </p>
            </CategoryShodown>

            <BrandBox brandList={orthopedicBrands} />

            <ContactBox />

        </main>
    )

}
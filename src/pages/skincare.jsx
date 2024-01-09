// Route: /skincare-products

import BrandBox from '../components/BrandBox'
import CategoryShodown from '../components/CategoryShodown'
import ContactBox from '../components/ContactBox'
import { orthopedicBrands } from '../datas/brands'
import skincareSlider from './../assets/ressources/skincare-slider.jpg'

export default function Skincare() {

    return (
        <main>

            <CategoryShodown categoryImg={skincareSlider} categoryTitle='Skincare Products'>
                <p>
                    Nordic Medical Solutions has many years of experience in the international aesthetic industry, 
                    which gives us a strong purchasing power. This makes us able to maintain a wide range of the 
                    most popular aesthetic medical devices available on the European market.
                </p>
                <p>
                    In this area we offer skincare products from brands like Fillmed, Mesoestetic, Teoxane and WiQo. 
                    Please click on each brand to see our selection of products.
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
import BrandBox from '../components/BrandBox'
import CategoryShodown from '../components/CategoryShodown'
import ContactBox from '../components/ContactBox'
import { orthopedicBrands } from '../datas/brands'
import aestheticSlider from "./../assets/ressources/aesthetic-slider.jpg";

export default function Aesthetic() {

    return (
        <main>

            <CategoryShodown categoryImg={aestheticSlider} categoryTitle='AUTHENTIC PRODUCTS PERSONAL SERVICE'>
                <p>
                    Nordic Medical Solutions has extensive knowledge of the international medical device industry and strong 
                    purchasing power, which enable us to maintain a wide range of the most popular dermal fillers 
                    available on the European market &ndash; delivered to you on time at competitive prices. 
                    Our suppliers include Allergan, Galderma and Filorga and we carry a full range of their 
                    most popular products such as Restylane, Juvederm and Fillmed.
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
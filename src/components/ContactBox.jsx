// Section des pages presentant une possibilite de contacter l'entreprise
// avec un bouton

import AppRoutes from "../routes";
import Btn from "./btn";

export default function ContactBox() {

    return (
        <section className="bg-third py-20">
            
            <div className="container">

                <div className="flex flex-col items-center space-y-3 text-white">

                    <h3>
                        IS YOUR PRODUCT MISSING FROM OUR RANGE?
                    </h3>

                    <p className="text-sm font-normal" style={{marginBottom: '1rem'}}>
                        Get in touch to hear more about how to become a supplier.
                    </p>

                    <Btn title="Contact us here" to={AppRoutes.contact}/>

                </div>

            </div>

        </section>
    )
    
}
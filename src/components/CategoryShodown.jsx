// Le simple Component qui affiche le
// Titre, une image de presentation ainsi qu'une description pour une category
// et un bouton

import Btn from "./btn";

export default function CategoryShodown({
    categoryImg = '',
    categoryTitle = '',
    children,
}) {

    return (
        <section className="bg-secondary-light md:px-[6%]">

            <div className="container">

                <div className="flex flex-col pt-12 max-sm:pt-10 md:flex-row items-center md:pt-0">

                    <figure className="w-100 mt-8 md:w-[47.25%] md:mr-[5.5%] md:mt-0 animate-fade-left">
                        <img src={categoryImg} alt={categoryTitle.toLowerCase() + 'image'} className="
                            w-full max-h-[693.85px] md:max-h-[512px] lg:max-h-[454.075px]"/>
                    </figure>

                    <div className="flex flex-col space-y-3 py-16 max-sm:py-[50px] md:w-[47.25%] lg:py-20 
                        xl:py-[102px] animate-fade-bottom">

                        <h2>
                            <a href="#brands">{categoryTitle.toUpperCase()}</a>
                        </h2>

                        <div className="space-y-4 text-sm font-normal text-justify leading-relaxed" style={{marginBottom: '0.8rem'}}>
                            {children}
                        </div>

                        <div>
                            <Btn toId="#brands" title="VIEW BRANDS HERE" dark/>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
    
}
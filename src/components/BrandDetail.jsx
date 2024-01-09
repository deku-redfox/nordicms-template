// Section presentant les details d'une brand

export default function BrandDetail({
    thumbUrl = '',
    title = '',
    description = []
}) {

    return (
        <section className="bg-secondary-light py-20">

            <div className="container">

                <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row">

                    <figure className="px-7 pt-7 pb-[22px] bg-white flex flex-col mt-2 items-center lg:w-[29.6667%]">
                        <img src={thumbUrl} alt={title + 'logo'} className="max-w-full"/>
                        <p className="italic font-normal text-sm mt-3">Manufactured by Genzyme</p>
                    </figure>

                    <div className="space-y-3 lg:ml-[5.5%] lg:w-[64.833%]">
                        <h2>
                            {title.toUpperCase()}
                        </h2>
                        <div className="space-y-4 text-sm font-normal text-justify leading-relaxed">
                            {description.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
    
}
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-primary-dark py-10">

            <div className="container">

                <div className="flex flex-col items-center">

                    <div className="flex flex-col items-center space-y-1 font-normal text-white text-sm">
                        <span className="text-center">
                            Nordic Medical Solutions ApS • Axel Towers • Axeltorv 2F, 5th floor • 1609 Copenhagen V • Denmark
                        </span>
                        <span>T +45 7370 7880 • VAT no.: DK34352542</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3 mt-6">
                        <div className="flex items-center">
                            <Link to="facebook.com" className="h-8 bg-blue-800 px-2 rounded-sm pt-1">
                                <FontAwesomeIcon icon={faFacebookF} color="white"/>
                            </Link>
                            <Link to="linkedin.com" className="h-8 bg-blue-500 px-2 rounded-sm pt-1 ml-3">
                                <FontAwesomeIcon icon={faLinkedinIn} color="white" size="lg"/>
                            </Link>
                        </div>
                        <img src="/wechat-footer.png" alt="wechat logo" className="h-8 cursor-pointer"/>
                        <img src="/whatsapp-footer.png" alt="whatsapp logo" className="h-8 cursor-pointer"/>
                    </div>

                    <div className="flex items-center mt-8 h-16">
                        <img src="/gazelle-nms.png" alt="gazelle nms logo" className="h-full" title="gazelle"/>
                        <img src="/wosiam-3.png" alt="wosiam logo" className="h-full" title="wosiam"/>
                    </div>

                </div>

            </div>

        </footer>
    )
}
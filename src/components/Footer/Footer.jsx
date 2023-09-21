import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        bdjnvdskjnvjks sjvnvnsdjnvdjd fsdvdshdkvdslkvndklvn s jvdklv fdsjvidsjvjdslkvdkslvnadsfjs eiuhjkgndkjgeughbjdfbddfv
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-info">
                        <FaLocationArrow/>
                        <div className="text">parade ground, Hyderabad, 500039</div>
                    </div>
                    <div className="c-info">
                        <FaMobileAlt/>
                        <div className="text">Phone: 0000000000</div>
                    </div>
                    <div className="c-info">
                        <FaEnvelope/>
                        <div className="text">Email: shopperz@stopperz.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Headphones</div>
                    <div className="text">Bluetooth speakers</div>
                    <div className="text">Home Theatre</div>
                    <div className="text">Ear buds</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy policy</div>
                    <div className="text">Terms & conditions</div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {

    return (
        <section>
            <div className="">
                <p>Contact With Us</p>
                <h2>You can ask us questions</h2>
                <p>Contact us for all your questions and opinions, or you can solve your <br />problems in a shorter time with our contact offices.</p>
            </div>

            <div className="">
                <div className="">
                    <h5>Our Offices</h5>
                    <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om <br />prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens <br />biov dijevis.</p>

                    <div className="">
                        <div className="">
                            <p><IoLocationSharp /></p>
                            <div className="">
                                <p>United States </p>
                                <h6>United States Office</h6>
                                <p>205 Middle Road , 2nd Floor, New York</p>

                                <h6>+02123456788</h6>
                                <p>info@example.com </p>

                            </div>
                        </div>
                        <div className="">
                            <p>Munich </p>
                            <h6>Munich States Office</h6>
                            <p>205 Moddle Road, 2nd Floor, New york</p>
                            <p>+545612322 </p>
                            <p>contact@example.com</p>
                        </div>


                    </div>

                    <div className="">
                        <p>Follow Us</p>
                        <div className="">
                            <p><FaFacebookF className='text-xl' /></p>
                            <p><TiSocialTwitter className='text-xl' /></p>
                            <p><FaInstagram className='text-xl' /></p>
                            <p><FaLinkedinIn className='text-xl' /></p>

                        </div>
                    </div>
                </div>

                <div className="">
                    <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam
inte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact

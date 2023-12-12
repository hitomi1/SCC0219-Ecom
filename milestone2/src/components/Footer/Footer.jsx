import React from "react";

import { SocialIcon } from 'react-social-icons';

import './Footer.css'

const Footer = () =>
(
    <footer>
        <div>
            <p>Rua Ficticia, 123 - Bairro Ficticio</p>
            <p>CEP: 13563-000, São Carlos - SP, Brazil</p>
            <p>Phone: +55 (99) 12345-6789</p>
        </div>

        <div>
            <SocialIcon fgColor="black" bgColor="#bbb" url={"https://www.instagram.com"} />
            <SocialIcon fgColor="black" bgColor="#bbb" url={"https://www.whatsapp.com"} />
            <SocialIcon fgColor="black" bgColor="#bbb" url={"https://www.facebook.com"} />
        </div>
    </footer>
);

export default Footer;
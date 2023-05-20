import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileButton} from "@fortawesome/free-solid-svg-icons";

import css from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={css.contacts}>
                <div><FontAwesomeIcon icon={faMobileButton}/> Phone: (050)-210-83-74</div>
                <div><FontAwesomeIcon icon={faEnvelope}/> Email: oleksijslota@gmail.com</div>
            </div>
        </footer>
    );
};

export default Footer;
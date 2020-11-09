import React from 'react';
import './footer.css';

import linkedin from '../../img/linkedinLogo.png';
import webIcon from '../../img/websiteIcon.png';
import mailIcon from '../../img/mailIcon.png';
import githubLogo from '../../img/githubLogo.png';

const Footer = () => {
    return(
        <div className="footer">
            <div className="thanks">
                <p>Sito creato grazie all'API gratuita offerta da <a 
                    href="https://pro.coinmarketcap.com/" 
                    className="emphF"
                    target='_blank'
                    rel="noreferrer noopener"
                    >CoinMarketCap</a>
                </p>
                <p>Immagini vettoriali, icone ed altri elementi grafici sono disponibili su <a 
                        href="https://it.freepik.com/" 
                        className="emphF"
                        target='_blank' 
                        rel="noreferrer noopener"
                        >Freepik</a>
                </p>
            </div>

            <div className="contact">
                <p>Copyright© 2020</p>
                <p>Realizzato da <span className="emphF">Antonio Alberto Sabatini</span></p>
                <h4>Contatti</h4>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/antonioalbertosabatini/" target='_blank' rel="noreferrer noopener">
                        <img 
                            src={linkedin} 
                            alt="Linkedin Logo" 
                            className="icon" 
                        />
                    </a>
                    <a href="https://www.antoniosabatini.it/" target='_blank' rel="noreferrer noopener">
                        <img 
                            src={webIcon} 
                            alt="Icon of website" 
                            className="icon" 
                        />
                    </a>
                    <a href="mailto:asabatini31@gmail.com" target='_blank' rel="noreferrer noopener">
                        <img 
                            src={mailIcon} 
                            alt="Icon of mail" 
                            className="icon" 
                        />
                    </a>
                    <a href="https://github.com/The-Anthony" target='_blank' rel="noreferrer noopener">
                        <img 
                            src={githubLogo} 
                            alt="Logo of gitHub" 
                            className="icon" 
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
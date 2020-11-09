import React from 'react';

//Stile per le pagine di errore
import './error.css';
//Immagine
import imageTooMany from '../../img/tooManyRequestsError.svg';

//Componente React Router
import { Link } from 'react-router-dom';

const TooManyRequests = () => {
    return(
        <div className='pageError'>
            <div className='textDiv'>
                <h1> <span className='emph'>Troppe richieste</span> - Torna Domani</h1>
                <p> <span className="emphError">Hai superato il limite permesso dall'API</span>. Questo sito web sfrutta un servizio gratuito che ha dei limiti giornalieri. Purtroppo li hai superati, ci dispiace tanto!</p>
                <Link to='/cryptoguide'>
                    <button className='buttonError'>Leggi la guida</button>
                </Link>
            </div>

            <div className='imageDiv'>
                <img src={imageTooMany} alt="" className='imageError'/>
            </div>
        </div>
    )
}

export default TooManyRequests;
import React from 'react';

//Stile per le pagine di errore
import style from './error.module.css';
//Immagine
import imageTooMany from '../../img/tooManyRequestsError.svg';

//Componente React Router
import { Link } from 'react-router-dom';

const TooManyRequests = () => {
    return(
        <div className={style.pageError}>
            <div className={style.textDiv}>
                <h1> <span className={style.emph}>Troppe richieste</span> - Torna Domani</h1>
                <p> <span className={style.emphError}>Hai superato il limite permesso dall'API</span>. Questo sito web sfrutta un servizio gratuito che ha dei limiti giornalieri. Purtroppo li hai superati, ci dispiace tanto!</p>
                <Link to='/cryptoguide'>
                    <button className={style.buttonError}>Leggi la guida</button>
                </Link>
            </div>

            <div className={style.imageDiv}>
                <img src={imageTooMany} alt="Error svg illustration" className={style.imageError}/>
            </div>
        </div>
    )
}

export default TooManyRequests;
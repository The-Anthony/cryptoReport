import React from 'react';

//Stile per le pagine di errore
import style from './error.module.css';
//Immagine
import imageError from '../../img/searchError.svg';

//Componente React Router
import { Link } from 'react-router-dom';


const RequestError = () => {
    return(
        <div className={style.pageError}>
            <div className={style.textDiv}>
                <h1><span className={style.emphError}>ERRORE</span></h1>
                <h2>Oh no! C'è stato un problema nella richiesta dei dati!</h2>
                <p>Ci scusiamo per l'inconveniente e ti chiediamo di riprovare più tardi. Risolveremo il problema il prima possibile!</p>

                <Link to='/cryptoguide'>
                    <button className={style.buttonError}>Leggi la guida</button>
                </Link>
            </div>

            <div className={style.imageDiv}>
                <img src={imageError} alt="" className={style.imageError}/>
            </div>

        </div>
    )
}

export default RequestError;
import React from 'react';

//Stile per le pagine di errore
import './error.css';
//Immagine
import imageError from '../../img/searchError.svg';

//Componente React Router
import { Link } from 'react-router-dom';


const RequestError = () => {
    return(
        <div className='pageError'>
            <div className="textDiv">
                <h1><span className="emphError">ERRORE</span></h1>
                <h2>Oh no! C'è stato un problema nella richiesta dei dati!</h2>
                <p>Ci scusiamo per l'inconveniente e ti chiediamo di riprovare più tardi. Risolveremo il problema il prima possibile!</p>

                <Link to='/cryptoguide'>
                    <button className='buttonError'>Leggi la guida</button>
                </Link>
            </div>

            <div className='imageDiv'>
                <img src={imageError} alt="" className='imageError'/>
            </div>

        </div>
    )
}

export default RequestError;
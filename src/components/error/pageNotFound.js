import React from 'react';

//Stile per le pagine di errore
import './error.css';
//Immagine
import imageDoubt from '../../img/doubt.svg';

//Componente React Router
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className='pageError'>
            <div className='textDiv'>
                <h1> <span className='emph'>404</span> - Pagina Non Trovata</h1>
                <p> <span className="emphError">Hey amico</span>, che cosa stai cercando? Anche se nel web ci sono miliardi di pagine questa ancora non esiste!</p>
                <Link to='/data'>
                    <button className='buttonError'>Torna ai dati</button>
                </Link>
            </div>
            <div className='imageDiv'>
                <img src={imageDoubt} alt="" className='imageError'/>
            </div>
            
        </div>
    )
}

export default PageNotFound;
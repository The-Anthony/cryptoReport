import React from 'react';

//Stile per le pagine di errore
import style from './error.module.css';
// Stile da altri moduli
import style1 from '../homepage/homepage.module.css';
//Immagine
import imageDoubt from '../../img/doubt.svg';

//Componente React Router
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className={style.pageError}>
            <div className={style.textDiv}>
                <h1> <span className={style1.emph}>404</span> - Pagina Non Trovata</h1>
                <p> <span className={style.emphError}>Hey amico</span>, che cosa stai cercando? Anche se nel web ci sono miliardi di pagine questa ancora non esiste!</p>
                <Link to='/data'>
                    <button className={style.buttonError}>Torna ai dati</button>
                </Link>
            </div>
            <div className={style.imageDiv}>
                <img src={imageDoubt} alt="Error svg illustration" className={style.imageError}/>
            </div>
            
        </div>
    )
}

export default PageNotFound;
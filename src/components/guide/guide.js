import React from 'react';

//Stile
import style from './guide.module.css';
import style1 from '../homepage/homepage.module.css';

//Componente React Router
import { Link } from 'react-router-dom';

const Guide = () => {
    return(
        <div className={style.guide}>
            <div className={style.container}>
               <h1 className={style.guideTitle + ' ' + style.principalTitle}>Guida per principianti assoluti</h1> 
               <p className={style.guideSub}>Sei attratto dal mondo delle criptovalute ma non sai ancora nulla e non capisci il significato dei dati che ti abbiamo fornito?</p>
               <p className={style.guideSub}>Questa <span className={style.guideEmph}>semplice e veloce guida</span> ti illustrerà le basi per approciarti a questo mondo</p>
               <div className={style.base}>
                   <h2 className={style.guideTitle}>Cos'è una criptovaluta?</h2>
                   <p>Le criptovalute sono beni che si basano sul digitale. Vengono utilizzati come beni di scambio tramite la <span className={style.guideEmph}>crittografia</span>, che rende le transazioni effettuate con esse anonime e sicure. La prima criptovaluta fu coniata nel 2009, col nome di <span className={style.guideEmph}>Bitcoin</span> . Uno dei principali vantaggi di queste nuove valute è la decentralizzazione del sistema: non servono banche e garanti, ma tutte le transazioni sono approvate e segnate nella <span className={style.guideEmph}>blockchain</span>.</p>
               </div>
               <div className={style.tecnichWords}>
                   <h2 className={style.guideTitle}>Termini e Significati</h2>
                   <p>Che cosa rappresentano i dati che ti abbiamo fornito? Qual è il loro significato? Ecco la guida che ti illustra il loro significato.</p>

                    <h3 className={style.guideSub}>Prezzo</h3>
                    <p>Il prezzo è ovviamente il <span className={style.guideEmph}>valore</span> di un'unità di una determinata criptovaluta espresso in una moneta convenzionale come Euro o Dollari. Ma come si stabilisce il prezzo di una criptovaluta? Esattamente come ogni altro bene al mondo, il suo prezzo viene influenzato direttamente dalla <span className={style.guideEmph}>domanda</span> e l'<span className={style.guideEmph}>offerta</span> di mercato. Quindi proprio come l'azione di un'azienda, il suo valore varia anche di molto durante le 24h. Anche il valore di valute come dollaro ed euro viene stabilito in questo modo, ma poiché ogni secondo milioni di persone effettuano transazioni con quelle monete il loro prezzo è stabile e cambia solo di pochi centesimi.</p>

                   <h3 className={style.guideSub}>Capitalizzazione di mercato (Cap.)</h3>
                   <p>La capitalizzazione di mercato è semplicemente il valore che si ottiene moltiplicando il prezzo di una determinata criptovaluta e il numero di unità in circolazione della criptovaluta stessa. Bisogna però fare attenzione: questo è un dato <span className={style.guideEmph}>teorico</span> e non affidabile. Immaginiamo di aver a disposizione tutti i Bitcoin disponibili sul mercato e di volerli vendere tutti assieme, puntando a una quantità di denaro uguale a quella della capitalizzazione dei Bitcoin. Poiché il prezzo dipende direttamente dalla domanda e dall'offerta, durante la vendita il valore di esso diminuirà e lo stesso accadrà per la capitalizzazione di mercato. Perciò essa è un dato che viene utilizzato esclusivamente per il <span className={style.guideEmph}>confronto</span> tra criptovalute e altri beni come azioni.</p>

                   <h3 className={style.guideSub}>Volume di mercato nelle ultime 24h</h3>
                   <p>Il volume è un elemento fondamentale nel mondo della finanza e nell'economia. Esso equivale al <span className={style.guideEmph}>totale di contratti stipulati</span> in un determinato periodo di tempo con un bene. Con contratto si intende ogni singola vendita, pagamento o scambio tracciato. Per esempio, quando paghiamo al market e riceviamo uno scontrino, stiamo stipulando un contratto, e anch'esso è incluso nel volume di mercato dell'Euro. Perciò il volume nelle ultime 24h di una criptovaluta indica il suo utilizzo, <span className={style.guideEmph}>diffusione</span> e popolarità.</p>
               </div>
               <p>Ora che sei abbastanza istruito per capire le informazioni che ti abbiamo fornito sulle criptovalute, vai subito ad analizzarle!  </p>
               <Link to='/data'>
                    <button className={style1.button}>Vai ai dati</button>
               </Link>
            </div>
            
        </div>
    )
}

export default Guide;

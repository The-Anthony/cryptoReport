import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
//Componenti di react router
import {useHistory, Link} from 'react-router-dom';
//Stile 
import style from './dataPage.module.css';
//Componenti
import CryptoCard from '../cryptoCard/cryptoCard';
import LegendWidget from '../legendWidget/legendWidget';
//Gif di caricamento
import loading from '../../img/loading.gif';
//Componenti di react redux
import {useSelector, useDispatch} from 'react-redux';
//Azioni di redux
import {saveData} from '../../redux/actions/actions';

const DataPage = () => {

    const history = useHistory(); //Mi permette di accedere e modificare l'url

    const dispatch = useDispatch(); //Accedo a eventuali dati già scaricati
    
    const [data, setData] = useState(useSelector(state => state.saveDataReducer)); //L'array dove andranno tutti i dati per essere mappati e renderizzati. Nel caso l'utente stia navigando nel sito ed abbia già scaricato i dati, essi vengono prelevati dallo store redux e vengono visualizzati.

    const [content, setContent] = useState('Scarica i dati'); //Contenuto del bottone - Per inserire il loading e aggiornare il testo

    const [counter, setCounter] = useState(data[1] === undefined ? 0 : 1); //Counter per far partire UseEffect solo quando richiesto e per evitare uno scaricamento ad ogni rendering dello schermo.

    const [nCrypto, setNCrypto] = useState(25); //N° criptovalute visualizzate

    const partOfUrl = useSelector(state => state.urlReducer); // Parte modificabile dell'url utilizzato per la richiesta che cambia a seconda dell'ordine di visualizzazione

    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?${partOfUrl}start=1&limit=${nCrypto}&convert=USD` //Url Base

    const saveDownloadedData = (data) => {
        dispatch(saveData(data));
    }; //Funzione che utilizza il dispatch per inviare l'azione e salvare i dati

    const updateNumber = (event) => {
        setNCrypto(event.target.value)
    } //Permette la modifica del valore tramite l'input select

    const dataRequest = () => {

        setContent(<img src={loading} alt='loading gif' className={style.loadingGif}/>); /*Imposta la gif di caricamento*/
        
        //Utilizzo cors anywhere per evitare errori 
        const urlComplete = `https://cors-anywhere.herokuapp.com/${url}`; 
        const header = {
            'X-CMC_PRO_API_KEY': process.env.REACT_APP_API_KEY,
        } //Url e chiave api collegata a file esterno .env
        
        axios({
            method: 'get', 
            url: urlComplete,
            headers: header,
            timeout: 90000, /*Tempo massimo per la richiesta --> 90s*/
          })
        .then((res) => {
            setData(res.data.data);  //Memorizza i dati
            setContent('Aggiorna'); //Modifica contenuto pulsante
            saveDownloadedData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            if (err.status ===  429) {
                history.push('/toomanyrequests')
                setContent('Scarica i Dati'); //Ripristina contenuto pulsante
            }
            else {
                history.push('/error'); /*Indirizza alla pagina di errore*/
                setContent('Scarica i Dati'); //Ripristina contenuto pulsante
            }  
        })

    }

    useEffect(() => {
        if (counter !== 0){ //Impedisce lo scaricamento dei dati appena si carica la pagina
            dataRequest()
        }
       
    }, [counter, url]);


    return(
        <div className={style.dataPage}>

            {/* Background tramite svg */}
            <div className={style.background1}>
                <div className={style.customShapeDividerTop1603954741}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFill}></path>
                    </svg>
                </div>
            </div>

            <div className={style.buttons}>

                <Link to='/cryptoguide'>
                    <button className={style.linkButton}>
                        Leggi la guida
                    </button>
                </Link>

                <button
                    className={style.requestButton} 
                    onClick={() => {
                        setCounter(counter + 1);
                    }}
                    >
                    {content}
                </button>

                <select name="nCrypto" className={style.selectInput} onChange={updateNumber}>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
                

            </div>
            
            <LegendWidget/>

            <div className={style.dataList}>
            {data.map((item, index) => (
                <CryptoCard
                key={index}
                number={index}
                symbol={item.symbol !== undefined? item.symbol : 'Dato non disponibile'}
                marketCap={item.quote !== undefined? item.quote.USD.market_cap: 'Dato non disponibile'}
                price={item.quote !== undefined? item.quote.USD.price: 'Dato non disponibile'}
                volume24h={item.quote !== undefined? item.quote.USD.volume_24h: 'Dato non disponibile'}
                percentChange={item.quote !== undefined? item.quote.USD.percent_change_24h: 'Dato non disponibile'}
                />))}
            </div>
           
        </div>
    )
}

export default DataPage;
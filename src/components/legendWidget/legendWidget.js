import React from 'react';

//Stile
import style from  './legendWidget.module.css';

//Componenti di react redux
import {useDispatch} from 'react-redux';

//Azioni di react redux
import {orderByPercent, orderByCap, orderByPrice, orderByVolume} from '../../redux/actions/actions';

const LegendWidget = () => {

    const dispatch = useDispatch(); //Permette di eseguire le azione e le manda al reducer

    return(
        <div className={style.legendWidget}>
            <div className={style.containerData}>
                <h1 className={style.symbolValue}>Simbolo</h1>
                <div className={style.firstDataBlock}>
                    <p 
                        className={style.capValue}
                        onClick={() => dispatch(orderByCap())}
                        >Cap.
                    </p>
                    <p 
                        className={style.priceValue}
                        onClick={() => dispatch(orderByPrice())}
                        >Prezzo
                    </p>
                </div>
                <div className={style.secondDataBlock}>
                    <p 
                        className={style.vol24h}
                        onClick={() => dispatch(orderByVolume())}
                        >Volume 24h
                    </p>
                    <p 
                        className={style.percentChange24h}
                        onClick={() => dispatch(orderByPercent())}
                        >Variazione Prezzo 24h
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LegendWidget;
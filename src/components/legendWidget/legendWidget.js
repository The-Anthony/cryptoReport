import React from 'react';

import './legendWidget.css'

//Componenti di react redux
import {useDispatch} from 'react-redux';

//Azioni di react redux
import {orderByPercent, orderByCap, orderByPrice, orderByVolume} from '../../redux/actions/actions';

const LegendWidget = () => {

    const dispatch = useDispatch(); //Permette di eseguire le azione e le manda al reducer

    return(
        <div className="legendWidget">
            <div className="containerData">
                <h1 className='symbolValue'>Simbolo</h1>
                <div className='firstDataBlock'>
                    <p 
                        className="capValue"
                        onClick={() => dispatch(orderByCap())}
                        >Cap.
                    </p>
                    <p 
                        className="priceValue"
                        onClick={() => dispatch(orderByPrice())}
                        >Prezzo
                    </p>
                </div>
                <div className='secondDataBlock'>
                    <p 
                        className="vol24h"
                        onClick={() => dispatch(orderByVolume())}
                        >Volume 24h
                    </p>
                    <p 
                        className="percentChange24h"
                        onClick={() => dispatch(orderByPercent())}
                        >Variazione Prezzo 24h
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LegendWidget;
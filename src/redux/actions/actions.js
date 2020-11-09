
//Ordinare i dati per percentuale di cambiamento di 24h più alta
export const orderByPercent = () => {
    return {
        type: "changePercent",
    }
}

//Ordinare i dati per capitalizzazione di mercato (di default) più alta
export const orderByCap = () => {
    return {
        type: 'capitalization',
    }
}

//Ordinare i dati per volume nelle ultime 24h più alta
export const orderByVolume = () => {
    return {
        type: 'volume',
    }
}

//Ordinare i dati per prezzo più alto
export const orderByPrice = () => {
    return {
        type: 'price',
    }
}

export const saveData = (data) => {
    return {
        type: 'saveData',
        data
    }
}
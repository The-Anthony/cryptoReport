const initialState = '';

const urlReducer = (state=initialState, action) => {
    switch (action.type){
        case 'changePercent':
            state = 'sort=percent_change_24h&';
            return state;
        case 'capitalization':
            state = '';
            return state;
        case 'volume':
            state = 'sort=volume_24h&';
            return state;
        case 'price':
            state = 'sort=price&';
            return state;
        default:
            return state;
    }
}

export default urlReducer;
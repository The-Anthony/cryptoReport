const initialData = [];

const saveDataReducer = (state=initialData, action) => {
    switch (action.type){
        case 'saveData':
            state = action.data;
            return state;
        default:
            return state;
    }
}

export default saveDataReducer;
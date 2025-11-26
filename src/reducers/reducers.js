const reducers = (state, action) => {
    const newObject = action.payload;
    switch (action.type) {
        case 'CHANGE_CREDIT_VALS':

            return {
                ...state,
                jCreditForm: newObject
            }

        case 'ADD_CREDIT_ADDS_VALS':
            return {
                ...state,
                jAddValues: newObject
            }

        case 'CALC_VALS':

            return {
                ...state,
                result: newObject
            }
        case 'SET_VISIBLE':

            return {
                ...state,
                visible: newObject
            }

        case 'SET_RATE_TYPE':

            return {
                ...state,
                params: {
                    ...state.params,
                    rateType: newObject
                }
            }
        case 'SET_WITH_INI':

            return {
                ...state,
                params: {
                    ...state.params,
                    withAccInit: newObject
                }
            }

        case 'RESTORE_STATE':
            return {
                ...state,
                ...newObject
            }



        default: return state;
    }
}




export default reducers;
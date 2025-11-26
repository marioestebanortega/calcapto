export const addCreditVals = (payload) => {
    return {
        type: 'CHANGE_CREDIT_VALS',
        payload
    }
}

export const addAddsVals = (payload) => {
    return {
        type: 'ADD_CREDIT_ADDS_VALS',
        payload
    }
}


export const calcVals = (payload) => {
    return {
        type: 'CALC_VALS',
        payload
    }

}


export const setVisible = (payload) => {
    return {
        type: 'SET_VISIBLE',
        payload
    }
}

export const setRateType = (payload) => {
    return {
        type: 'SET_RATE_TYPE',
        payload
    }
}

export const setIsWithIni = (payload) => {
    return {
        type: 'SET_WITH_INI',
        payload
    }
}

export const restoreState = (payload) => {
    return {
        type: 'RESTORE_STATE',
        payload
    }
}
import React from 'react'
import ReactDOM from 'react-dom'
import RouterApp from './routes/RouterApp';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import initState from './services/initVals.json';
import reducer from './reducers/reducers'
import {formatCurrencyVal} from './services/calcaptoServices'

const formatIni={...initState,
    jCreditForm:{
        ...initState.jCreditForm,
        vProperties:formatCurrencyVal(initState.jCreditForm.vProperties)
    },
    jAddValues:{
        ...initState.jAddValues,
        addCredit: formatCurrencyVal(initState.jAddValues.addCredit),
        addIni: formatCurrencyVal(initState.jAddValues.addIni)
    }
}
const store=createStore(reducer,formatIni);

ReactDOM.render(
    <Provider store={store}>
        <RouterApp />
    </Provider>
    , document.getElementById('app'));
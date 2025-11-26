import React from 'react'
import './assets/styles/App.css'

import DataIn from './components/DataIn'



import Results from './components/Results'
import History from './components/History'

const App = () => {
  return (
    <div className="main-layout">
      <div className="layout-column form-column">
        <DataIn />
      </div>
      <div className="layout-column results-column">
        <Results />
      </div>
      <div className="layout-column history-column">
        <History />
      </div>
    </div>
  )
}


export default App;



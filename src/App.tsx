import React from 'react'
import './App.css'
import {rates} from './rates'
import Header from './Header'

const App: React.FC<{}> = () => {
  const tabledRates = rates.map((x, i) => (
    <div className="row" key={i}>
      <div className="id">{i + 1}</div>
      <div className="name">{x.name} <span> Phone card rates</span></div>
      <div className="number number1"><span>$5:</span> {x.five} min</div>
      <div className="number number2"><span>$10:</span> {x.ten} min</div>
      <div className="number number3"><span>$20:</span> {x.twenty} min</div>
    </div>
  ))

  return (
    <div className="rates">
      <Header />
      <main>
        <div className="table">
          <div className="row header">
            <div>#</div>
            <div>Country / provider</div>
            <div className="number">$5 Phone Card</div>
            <div className="number">$10 Phone Card</div>
            <div className="number">$20 Phone Card</div>
          </div>
          {tabledRates}
        </div>
      </main>
    </div>
  )
}

export default App

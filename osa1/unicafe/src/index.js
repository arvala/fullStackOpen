import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const feedback = 'give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodToValue = (value) => setGood(value)
  const setNeutralToValue = (value) => setNeutral(value)
  const setBadToValue = (value) => setBad(value)
  const statistics = {
    name : 'statistics',
    values : [
      {
        name : 'good'
      },
      {
        name : 'neutral'
      },
      {
        name : 'bad'
      }
    ]
  }

  return (
    <div>
     <Header feedback={feedback}/>
     <Buttons good={good} setGoodToValue={setGoodToValue} 
     neutral={neutral} setNeutralToValue={setNeutralToValue} 
     bad={bad} setBadToValue={setBadToValue} 
     statistics={statistics}
     /> 
     <Statistics statistics ={statistics} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Header = (props) =>{
  return (
      <>
      <h1>{props.feedback}</h1>
      </>
  )
} 

const Buttons = (props) =>{
  return (
      <>
      <Button
        handleClick={() => props.setGoodToValue(props.good + 1)}
        text= {props.statistics.values[0].name}
      />
      <Button
        handleClick={() => props.setNeutralToValue(props.neutral + 1)}
        text= {props.statistics.values[1].name}
      />
      <Button
        handleClick={() => props.setBadToValue(props.bad + 1)}
        text={props.statistics.values[2].name}
      />
      </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) =>{
  return (
      <>
      <h1>{props.statistics.name}</h1>
      <p>{props.statistics.values[0].name} {props.good}</p>
      <p>{props.statistics.values[1].name} {props.neutral}</p>
      <p>{props.statistics.values[2].name} {props.bad}</p>
      </>
  )
} 


ReactDOM.render(<App />, 
  document.getElementById('root')
)
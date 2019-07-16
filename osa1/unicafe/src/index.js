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
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>{props.statistics.name}</h1>
        <p>No feedback is yet given, so no stats available.</p>
      </div>
    )
  }
  return (
      <>
      <h1>{props.statistics.name}</h1>
      <table>
        <tbody>
          <Statistic name= {props.statistics.values[0].name} value={props.good} />
          <Statistic name= {props.statistics.values[1].name} value={props.neutral} />
          <Statistic name= {props.statistics.values[2].name} value={props.bad} />
          <Statistic name= 'Total' value={sumOfVotes(props)} />
          <Statistic name= 'Average' value={averageOfVotes(props)} />
          <Statistic name= 'Positives' value={percentageOfPositiveVotes(props)} />
        </tbody>
      </table>
      </>
  )
} 

const Statistic = ({name, value}) =>{
  return (
    <tr>
    <td>{name}</td> 
    <td>{value}</td>
    </tr>
  )
}

const sumOfVotes = (props) => props.good + props.neutral + props.bad

const averageOfVotes = (props) =>{
  const amount = props.good + props.neutral + props.bad
  const sum = props.good*1 + props.neutral*0 + props.bad*-1
  return (
    <>
    {sum / amount}
    </>
  )
}

const percentageOfPositiveVotes = (props) =>{
  const sum = props.good + props.neutral + props.bad
  return (
    <>
    {props.good / sum * 100} %
    </>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
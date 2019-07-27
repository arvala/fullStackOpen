import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const amountOfAnecdotes = props.anecdotes.length
  const [anecdoteVotes, setAnecDoteVotes] = useState([0,0,0,0,0,0,0])

  return (
    <div>
      <Anecdote anecdotes= {props.anecdotes} selected = {selected} anecdoteVotes = {anecdoteVotes}/>
      <Button
        handleClick={() => setSelected(getRandomInt(0, amountOfAnecdotes))}
        text= "new anecdote"
      />
      <Button
        handleClick={() => setAnecDoteVotes(voteforAnecdote(selected, anecdoteVotes))}
        text= "vote for this anecdote"
      />
      <AnecdoteOfTheDay anecdotes={props.anecdotes} anecdoteVotes= {anecdoteVotes}/>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = (props) =>{
  return (
      <>
      <p>{props.anecdotes[props.selected]}</p>
      </>
  )
}

const AnecdoteOfTheDay = (anecdoteVotes, anecdotes) =>{
  let largestAmountOfVotes = 0
  let index = 0
  var i;
  for (i = 0; i < anecdoteVotes.length; i++) {
    if (anecdoteVotes[i]>largestAmountOfVotes){
      largestAmountOfVotes=anecdoteVotes[i]
      index = i
      console.log('index: ', index)
    }
  }
  const anecdoteOfTheDay = index
  console.log('anecdoteOfTheDay: ', anecdoteOfTheDay)

  return (
    <Anecdote anecdotes={anecdotes} selected={anecdoteOfTheDay}/>
  )
}

const anecdotes = [
    'Moar anecdotes',
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function voteforAnecdote(selected, anecdoteVotes){
    
    const copy = [...anecdoteVotes]
    console.log('array length: ', copy.length)
    copy[selected] += 1 
    copy.forEach(value => {
        console.log('amount of votes: ', value)
      }) 
    return copy
  }


  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
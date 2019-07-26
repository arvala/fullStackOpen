import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const amountOfAnecdotes = props.anecdotes.length
  let anecdoteVotes = [0, 0, 0, 0, 0, 0, 0]

  return (
    <div>
      <Anecdote anecdotes= {props.anecdotes} selected = {selected} anecdoteVotes = {anecdoteVotes}/>
      <Button
        handleClick={() => setSelected(getRandomInt(0, amountOfAnecdotes))}
        text= "new anecdote"
      />
      <Button
        handleClick={() => anecdoteVotes = voteforAnecdote(selected, anecdoteVotes)}
        text= "vote for this anecdote"
      />
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
        <p><NewRandomAnecdote anecdotes = {props.anecdotes}/></p>
        </>
    )
}

const NewRandomAnecdote = (props) =>{
    const amountOfAnecdotes = props.anecdotes.length
    const random = getRandomInt(0, amountOfAnecdotes)
    console.log({random})
    const chosenAnecdote = props.anecdotes[random]
    console.log({chosenAnecdote})
    return (
        <>
        <>{props.anecdotes[random]}</>
        </>
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
    copy[selected] += 1 
    copy.forEach(value => {
        console.log(value)  // 
      }) 
    return copy
  }


  ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
  )
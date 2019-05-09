import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14
    return (
        <div>
            <Header course={course}/>
            <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
            <Footer exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    )
}

const Header = (props) =>{
    return (
        <>
        <h1>{props.course}</h1>
        </>
    )
} 

const Content = (props) =>{
    return (
        <>
        <p>
        {props.part1} {props.exercises1}
        </p>
        <p>
        {props.part2} {props.exercises2}
        </p>
        <p>
        {props.part3} {props.exercises3}
        </p>
        </>
    )
} 

const Footer = (props) =>{
    return(
        <>
        <p>yhteensä {props.exercises1 + props.exercises2 + props.exercises3} tehtävää</p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
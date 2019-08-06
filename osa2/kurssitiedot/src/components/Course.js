import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


const Header = ({ course }) => {
    return (
        <>
            <h2>{course.name}</h2>
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <>
            <p>{part} {exercises}</p>
        </>
    )
}

const Total = ({ parts }) => {
    console.log(parts)
    var totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <p>Yhteensä {totalAmount} tehtävää</p>
        </>
    )
}
export default Course
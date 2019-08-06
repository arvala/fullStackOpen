import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                },
                {
                    name: 'Additional part',
                    exercises: 11,
                    id: 5
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        },
        {
            name: 'Bullshit.js',
            id: 3,
            parts: [
                {
                    name: 'Extra1',
                    exercises: 4,
                    id: 1
                },
                {
                    name: 'Extra2',
                    exercises: 8,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <Courses courses={courses} />
        </div>
    )
}

const Courses = ({courses}) => {
    return (
        <>
         {courses.map(course => <Course key={course.id} course={course} />)}
        </>
    )
}

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
            <h1>{course.name}</h1>
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

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



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


ReactDOM.render(
    <App courses={courses} />,
    document.getElementById('root')
  )
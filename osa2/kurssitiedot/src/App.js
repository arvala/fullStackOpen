import React from 'react'
import Course from './components/Course'

const App = ({courses}) => {
    return (
        <div>
            <h1>Curriculum</h1>
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

export default App
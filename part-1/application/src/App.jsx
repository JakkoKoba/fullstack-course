// Render the name of the course
const Header = props => {
  console.log(props)
  return <h1>{props.course}</h1>
}

// Render each individual part in the Content component
const Part = props => {
  console.log(props)
  return <p> {props.part} {props.exercises} </p>
}

// Render the part name and the number of exercises
const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </>
  )
}

// Render the total number of exercises
const Total = props => {
  console.log(props)
  return <p>Number of exercises {props.a + props.b + props.c}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content
        part1={part1.name} exercises1={part1.exercises}
        part2={part2.name} exercises2={part2.exercises}
        part3={part3.name} exercises3={part3.exercises}
      />
      <Total a={part1.exercises} b={part2.exercises} c={part3.exercises}/>
    </div>
  )
}

export default App
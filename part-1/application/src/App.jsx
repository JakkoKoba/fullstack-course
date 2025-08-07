// Render the name of the course
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Render each individual part in the Content component
const Part = (props) => {
   return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
   )
}

// Render the part name and the number of exercises
const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.a + props.b + props.c}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total a={exercises1} b={exercises2} c={exercises3}/>
    </div>
  )
}

export default App
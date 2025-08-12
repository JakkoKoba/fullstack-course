import { useState } from 'react'

const Button = (props) => <button onClick={props.action}> {props.text} </button>
const Display = (props) => <h1> {props.text} </h1>

const Total = (props) => (
  <>
    <p>good {props.good} <br/>
    neutral {props.neutral} <br/>
    bad {props.bad}</p>
  </>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const isGood = () => setGood(good + 1)
  const isNeutral = () => setNeutral(neutral + 1)
  const isBad = () => setBad(bad + 1)

  return (
    <div>
      <Display text="give feedback"/>
      <Button text="good" action={isGood}/>
      <Button text="neutral" action={isNeutral}/>
      <Button text="bad" action={isBad}/>
      <Display text="statistics"/>
      <Total good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
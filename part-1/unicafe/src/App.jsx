import { useState } from 'react'

const Button = (props) => <button onClick={props.action}> {props.text} </button>
const Display = (props) => <h1> {props.text} </h1>

const Statistics = (props) => (
  <>
    good {props.good} <br/>
    neutral {props.neutral} <br/>
    bad {props.bad} <br/>
    all {props.total} <br/>
    average <AvgScore score={props.score} total={props.total}/> <br/>
    positive <Positive good={props.good} total={props.total}/>
  </>
)

const AvgScore = (props) => {
  const avg = props.score / props.total
  return (
    <>
      {avg}
    </>
  )
}

const Positive = (props) => {
  const positive = props.good / props.total * 100
  return (
    <>
      {positive} %
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const [score, setScore] = useState(0)

  const isGood = () => {
    setScore(score + 1)
    setTotal(total + 1)
    return (
      setGood(good + 1)
    )
  }

  const isNeutral = () => {
    setScore(score + 0)
    setTotal(total + 1)
    return (
      setNeutral(neutral + 1)
    )
  }

  const isBad = () => {
    setScore(score - 1)
    setTotal(total + 1)
    return (
      setBad(bad + 1)
    )
  }

  return (
    <div>
      <Display text="give feedback"/>
      <Button text="good" action={isGood}/>
      <Button text="neutral" action={isNeutral}/>
      <Button text="bad" action={isBad}/>
      <Display text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score}/>
    </div>
  )
}

export default App
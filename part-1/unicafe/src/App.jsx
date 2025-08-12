import { useState } from 'react'

const Button = (props) => <button onClick={props.action}> {props.text} </button>
const Display = (props) => <h1> {props.text} </h1>

const Statistics = (props) => {
  if (props.total == 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

  const avg = props.score / props.total
  const positive = (props.good / props.total) * 100

  return (
    /*<>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="total" value={props.total}/>
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={`${positive} %`} />
    </>*/
    <>
      <Table good={props.good} neutral={props.neutral} bad={props.bad} total={props.total} avg={avg} positive={`${positive} %`} />
    </>
  )
}

const Table = (props) => {
  return (
    <table>
      <tbody>
        <TableRow text="good" value={props.good}/>
        <TableRow text="neutral" value={props.neutral}/>
        <TableRow text="bad" value={props.bad}/>
        <TableRow text="total" value={props.total}/>
        <TableRow text="average" value={props.avg} />
        <TableRow text="positive" value={props.positive} />
      </tbody>
    </table>
  )
}

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      {props.text} {props.value} <br/>
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
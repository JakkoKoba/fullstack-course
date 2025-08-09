import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const Display = ({counter}) => <div>{counter}</div>
  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  const increase = () => setCounter(counter + 1)
  const zero = () => setCounter(0)
  const decrease = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increase} text='increase'/>
      <Button onClick={zero} text='zero'/>
      <Button onClick={decrease} text='decrease'/>
    </div>
  )
}

export default App
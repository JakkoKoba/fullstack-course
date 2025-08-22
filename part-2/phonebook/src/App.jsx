import { useState } from 'react'

const Name = ({ name }) => {
  return <p>{name}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log("Button clicked")

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook.`)
    } else {
      setPersons(persons.concat({name: newName})) // Creates an object with "name" so that the name component can access person.name
      console.log(newName)
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit"> add </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <Name key={person.name} name={person.name} />
        ))}
      </div>
    </div>
  )
}

export default App

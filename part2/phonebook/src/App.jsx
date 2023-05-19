import { useState, useEffect } from 'react'
import Persons from './component/Persons'
import Filter from './component/Filter'
import PersonForm from './component/PersonForm'
import personService from './services/persons'
import Notification from './component/Notifications'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [notification, setNotification] = useState(null)
 

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
  
    const nameExists = persons.some(person => person.name === newName)
  
    if (nameExists) {
      const confirmed = window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)
      if (confirmed) {
        const existingPerson = persons.find(person => person.name === newName)
        const updatedPerson = { ...existingPerson, number: newNumber }
        personService
          .update(existingPerson.id, updatedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id === existingPerson.id ? updatedPerson : person))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.log('Error updating person:', error)
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(personObject)
        .then(response => {
          setPersons([...persons, response])
          setNewName('')
          setNewNumber('')
        })
        setNotification(`Added ${newName}`)
    }
  }
    const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))


  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .deletePerson(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch(error => {
          console.log('Error deleting person:', error)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange}
      />
      <h2>Add new</h2>
      
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} remove={handleDelete}/>
    </div>
  )
}

export default App
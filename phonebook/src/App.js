import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import People from './components/People'
import Filter from './components/Filter'
import { Button } from '@material-ui/core';

const App = () => {

  //states
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('');
  //addperson
  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.map((persons)=> persons.name).includes(personObject.name) === false){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } 
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }
  
  //event handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  //render
  return (
    <div>
       <h1>Phonebook</h1>
      <Filter searchName={searchName} setSearchName={setSearchName} />
      <h2>add a name</h2>
      <PersonForm addPerson = {addPerson} newName = {newName} handleNameChange = {handleNameChange} newNumber = {newNumber} handleNumberChange = {handleNumberChange} />
      <h2>Numbers</h2>
      <People person = {persons} searchName = {searchName} />
    </div>
  )
}

export default App
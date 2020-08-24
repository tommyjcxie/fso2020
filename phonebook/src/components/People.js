import React, { useState } from 'react'
import Person from './Person'

const People = ({person, searchName}) => {
    return(
        <>
            {person.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())).map((person) => <Person key = {person.name} person = {person}/>)}
        </>
    )
  }

  export default People
import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';

const PersonForm = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return(
      <div>
        <form onSubmit={addPerson}>
          <div>
            <TextField id = "standard-basic" label = "name"   value={newName} onChange ={handleNameChange} />
          </div>
          <div>
             <TextField id = "standard-basic" label = "number" value={newNumber} onChange ={handleNumberChange} />
          </div>
          <br></br>
          <div>
            <Button variant = "outlined" color = "Primary" type="submit">add</Button>
          </div>
        </form>
      </div>
    )
  
  }

  export default PersonForm;
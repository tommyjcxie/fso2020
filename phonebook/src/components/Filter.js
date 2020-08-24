import React from 'react';
import { Button, TextField } from '@material-ui/core';

const Filter = ({searchName, setSearchName}) => {

    const handleSearch = (event) => {
        setSearchName(event.target.value)
      }
    return (
        <>
         <TextField id = "standard-basic" label = "Search for a name"value={searchName} onChange={handleSearch} />
        </>
    )
}

export default Filter;
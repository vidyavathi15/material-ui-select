import React, {useState} from 'react' 


import {Box,  MenuItem} from "@mui/material"

import Select from '@mui/material/Select'

function Muiselect() {

    const [country, setCountry] = useState([])


    const handleChange = (event) => {
        const value=event.target.value
        setCountry([typeof(value) === "string" ? value.split(",") : value])

    }


    console.log({country})



  return (
      <Box width="240px" >
          <Select
          label="demo-multiple-name-label"
          
          multiple
          value={country}
          onChange={handleChange}
          fullWidth
          
        >

              <MenuItem value="INDIA" >INDIA</MenuItem>
              <MenuItem value="USA" >USA</MenuItem>
              <MenuItem value="AUSTRALIA" >AUSTRALIA</MenuItem>
              
              
              
              
              </Select>    
          
          
          
          
          
          
          
          
          
         








      </Box>
    
  )
}

export default Muiselect
import * as React from 'react';
import { Button, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import NavBar from './NavBar'




const DonatePage = () => {
    const diet = [
        {
          value: 'Vegetarian',
          label: 'Veg',
        },
        {
          value: 'Non-Vegetarian',
          label: 'Non-Veg',
        }
      ];
      const FoodType = [
        {
          value: 'Dry Food',
          label: 'Dry',
        },
        {
          value: 'Wet Food',
          label: 'Wet',
        }
      ];
      const Fresh = [
        {
          value: 'Today',
          label: 'Today',
        },
        {
          value: 'Yesterday',
          label: 'Yesterday',
        },
        {
          value: '2 days ago',
          label: '2 days ago',
        }
      ];
  return (
   <>
   {/* <NavBar/> */}
     <Box sx={{display: 'flex',  justifyContent:'center'  }}>
        <form component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField id="standard-basic" label="Your Pick Up Address" variant="standard" /><br/>
          
          
          <TextField
          id="standard-select-currency"
          select
          label="Select Diet"
          defaultValue="Dry"
          // helperText="Select Diet"
          variant="standard"
        >
          {diet.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br/>

        <TextField
          id="standard-select-currency"
          select
          label="Type of Food"
          defaultValue="Veg"
          // helperText="Select Diet"
          variant="standard"
        >
          {FoodType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br/>
        <TextField
          id="standard-select-currency"
          select
          label="When Prepared"
          defaultValue="Veg"
          // helperText="Select Diet"
          variant="standard"
        >
          {Fresh.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br/>
        <Button variant="contained" type="submit">Submit</Button>


        </form>
       

      
          
        
          
        

  
    </Box>
   </>
  )
};

export default DonatePage;
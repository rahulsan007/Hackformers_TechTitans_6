import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


export default function ImageAvatars() {
  return (
    <Stack direction="column" margin='50px' >
      
      <Avatar sx={{height:'150px', width:'150px', margin:'70px' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <TextField
          id="standard-read-only-input"
          label="Home Address"
          defaultValue="Gb road, Panvel South, Mumbai - 400083"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        /><br/>
        <TextField
          id="standard-read-only-input"
          label="Pin Code"
          defaultValue="400083"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        /> <br />
      
        <TextField
          id="standard-read-only-input"
          label="E-mail Id"
          defaultValue="someonesname@gmail"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
          /><br/>

          <TextField
          id="standard-read-only-input"
          label="Phone Number"
          defaultValue="9696969696"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      <Button variant="outlined" startIcon={<ModeEditIcon/>}>
        Delete
      </Button>
    </Stack>
  );
          
}

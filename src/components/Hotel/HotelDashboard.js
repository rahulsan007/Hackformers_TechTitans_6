import { Button, MenuItem, TextField,Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import HotelCard from './HotelCard'
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { TableHead,Card, Table,  TableRow, TableCell, TableBody } from '@mui/material';


import React, {useState, useEffect} from 'react'

const HotelDashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
  };
  const [formData, setFormData] = useState({name: '', desc: '', reamount: '', discount: '' , file: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/hotel.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Thanks');
        setFormData({ name: '', desc: '', reamount: '', discount: '' , file: ''});
      } else {
        alert('Unable to submit form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    
        fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/hotel.json')
          .then(response => response.json())
          .then(data => {
            const dataArray = Object.keys(data).map(key => {
              const item = data[key];
              return {
                desc: item.desc,
                discount: item.discount,
                email: item.email,
                file: item.file,
                name: item.name,
                reamount: item.reamount
              };
            });
            setData(dataArray);
          })
          .catch(error => console.log(error));
      }, []);
  
  return (
    <>
      <Box>
      <Container sx={{display:'flex', justifyContent:'space-around', margin:'20px', display: isMobile ? "none" : "flex" }}>
      <Typography variant="h5" sx={{ margin: "10px", marginLeft: "100px" }}>
            Your Order
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#000", "&:hover": { background: "#808080" } }}
            endIcon={<AddIcon />} onClick={handleOpen}>
            Create Order
          </Button>
      </Container>
      
        <Card >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.name}>
              <TableCell>{item.reamount}</TableCell>
              <TableCell>{item.desc}</TableCell>
              <TableCell>{item.discount}</TableCell>
              <TableCell>{item.name}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
       
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container sx={{background:'white', padding:'20px'}}>
            <form onSubmit={handleSubmit} >
              <Typography variant='h5'>Create New Order</Typography>
              <TextField
          id="standard-textarea"
          label="Dish Name"
          placeholder="Enter Dish Name"
          multiline
          variant="standard"
          name='name'
          value={formData.name} onChange={handleInputChange}
        />
        <TextField
          id="standard-textarea"
          label="Describe your Dish"
          placeholder="Description"
          multiline
          variant="standard"
          name='desc'
          value={formData.desc} onChange={handleInputChange}
        />
        <FormControl fullWidth sx={{ m: 1,}} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            name='reamount'
          value={formData.reamount} onChange={handleInputChange}
          />
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            name='discount'
          value={formData.discount} onChange={handleInputChange}
          />
        </FormControl>
        <TextField
          id="standard-textarea"
          label="Image link"
          placeholder="Description"
          multiline
          variant="standard"
          name='file'
          value={formData.file} onChange={handleInputChange}
        />
        
        <Button variant="contained" type="submit" sx={{background:'#000',margin:'10px', "&:hover": { background: "#808080" }}}>Donate</Button>
        

            </form>

          </Container>
        </Box>
      </Modal>
    </>
  )
}

export default HotelDashboard

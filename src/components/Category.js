import { Button, Container, FormControl, Input, InputAdornment, InputLabel, Modal, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React , {useState} from "react";
import MealsPng from '../assets/meals.png'
import SnackPng from '../assets/snack.png'
import DesssertPng from '../assets/dessert.png'
import NonVegPng from '../assets/nonveg.png'
import FastfoodIcon from '@mui/icons-material/Fastfood';


const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/donate.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('Thank you for your donation!');
        setFormData({ name: '', desc: '', pick: '', deit: '' , file: ''});
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
  };

  return (
   
    <>
     <Box sx={{ background: "#" ,}} m="auto">
      <Box sx={{ display: isMobile ? "none" : "block" }}>
        <Stack
          direction="row"
          spacing={1}
          display="flex"
          justifyContent="space-around"
          margin="10px" marginBottom='30px'
        >
          <Typography variant="h5" sx={{ margin: "10px", marginLeft: "100px" }}>
            Category
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "#000", "&:hover": { background: "#808080" } }}
            endIcon={<FastfoodIcon/>} onClick={handleOpen}
          >
            Donate Food
          </Button>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          display="flex"
          justifyContent="center"
          // alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Meals"
              src={MealsPng}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Veg Meals
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={NonVegPng}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Non-Veg Meals
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={SnackPng}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Snacks
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={DesssertPng}
              sx={{ width: 200, height: 200 }}
            />
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Desserts
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: isMobile ? "block" : "none" }}>
      <Stack direction="row"
          spacing={3}
          marginBottom='30px'
          >
        <Typography variant="h6" sx={{}}>
          Category
        </Typography>
        <Button variant="contained" size="small" sx={{background:'#000','&:hover':{background:'#808080', marginLeft:'5px'}}} onClick={handleOpen}>Donate Food</Button>
        </Stack>
        <Stack
          direction="row"
          spacing={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ overflowX: "auto" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={MealsPng}
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="h6" sx={{ textAlign: "center", fontSize:'18px' }}>
              Meals
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={NonVegPng}
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="h6" sx={{ textAlign: "center" , fontSize:'18px' }}>
              Non-Veg Meals
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={SnackPng}
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="h6" sx={{ textAlign: "center" , fontSize:'18px' }}>
              Snacks
            </Typography>
          </Box>
          
        </Stack>
      </Box>
    </Box>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container sx={{background:'white', padding:'20px', borderRadius:'20px',alignItems:'center'}}>
            <form onSubmit={handleSubmit} >
              <Typography variant='h5'>Donate Food to Needy</Typography>
              <TextField
          id="standard-textarea"
          label="Dish Name"
          placeholder="Enter Dish Name"
          multiline
          name="name"
          variant="standard"
          value={formData.name} onChange={handleInputChange}
        />
        <TextField
          id="standard-textarea"
          label="Describe your Dish"
          placeholder="Description"
          multiline
          name="desc"
          variant="standard"
          value={formData.desc} onChange={handleInputChange}
        />
        <TextField
          id="standard-textarea"
          label="Pickup Location"
          placeholder="Current Location"
          name="pick"
          multiline
          variant="standard"
          value={formData.pick} onChange={handleInputChange}
        />
         <TextField
          id="standard-textarea"
          label="Deitary"
          placeholder="Veg/Non-veg"
          name="deit"
          multiline
          variant="standard"
          value={formData.deit} onChange={handleInputChange}
        />
        <TextField
      fullWidth
      margin="normal"
      type="file"
      label="Upload an image"
      name="file"
      value={formData.file} onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
      }}/>
        
        <Button variant="contained" type="submit" sx={{background:'#000',margin:'10px', "&:hover": { background: "#808080" }}}>Donate</Button>
            </form>

          </Container>
        </Box>
      </Modal>
    </>
  );
};

export default Dashboard;

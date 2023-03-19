import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Stack } from '@mui/system';
import Logo from '../assets/logo.svg'
import { deepOrange, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import AvatarDrop from '../components/AvatarDrop'

const NavBar = () => {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
    
  return (
    <AppBar position="static">
        <Toolbar sx={{justifyContent:'space-between', background:'#F8EB7D', borderBottom:1, borderColor:'black'}}>
            <img src={Logo} alt="" width='120px' height='80px' />
       
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{color:'#000'}} onClick={handleClose}><a href='/' style={{color:'black'}}>Home</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/' style={{color:'black'}}>For Restuarant</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='/' style={{color:'black'}}>For Users</a></MenuItem>
      </Menu>
          <Stack direction='row'  sx={{
                mr: 2,
                display: { xs: 'none', md: 'block' },
                
              }}>
            <Button color='inherit' ><a href='/' style={{color:'black'}}>Home</a></Button>
            <Button color='inherit'><a href='/login' style={{color:'black'}}>Login</a></Button>
            <Button color='inherit'><a href='/signup' style={{color:'black'}}>Signup</a></Button>
            <a href="http://localhost:3001/Profile"><Avatar sx={{ bgcolor: deepOrange[500], float:'right' }}>N</Avatar></a>
           {/* <section sx={{float:'right'}}> <AvatarDrop/></section> */}
          </Stack>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            
            onClick={handleClick}
            sx={{
                mr: 2,
                display: { xs: 'block', md: 'none' },
              }}
            
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
  )
  
}


export default NavBar


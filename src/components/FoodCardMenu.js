import { Box, Container } from '@mui/system'
import React from 'react'
import FoodCard from './FoodCard'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FoodCardMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Container sx={{marginTop:'20px', display:'flex', justifyContent:'center' ,display: isMobile ? "none" : "flex", justifyContent:'center'}}>
    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    </Container>
    <Container sx={{marginTop:'20px', display:'flex', justifyContent:'center' ,display: isMobile ? "block" : "none", justifyContent:'center'}}>
    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    </Container>
    
        
    </>
  )
}

export default FoodCardMenu

import React from "react";
import { Box, Typography } from "@mui/material";
import Space from "../assets/space.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <Box sx={{ backgroundColor: "#F8EB7D", height: "100px", width: "100%" }}>
        {/* <img src="https://fujioriental.com/ca_ES/web_editor/shape/illustration/themunchies-family-style-restaurant-food-lunch-meal-dessert-party-casual-svg-588?unique=6fea5a23&c1=%2392B475" /> */}
       
        <div sx={{margin:'5%'}}><h1 align='center' sx={{margin:'5px'}} >EDIBLES</h1></div>
       <div> <p align='center' >
          Food is important component of living being , So we team Edible
           ensure that so food is wasted <br/> by distributing extra food to people in need
          
        </p></div>
        <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
        <Button  variant="contained" sx={{backgroundColor:'black' }}><Link to="/signup" style={{color:'white'}}>Join us</Link> </Button>
        <Button variant="contained" sx={{backgroundColor:'black' }}><Link to="/hotelsignup" style={{color:'white'}}>Join as Hotel</Link> </Button>
        <Button variant="contained" sx={{backgroundColor:'black' }}><Link to="/charitysignup" style={{color:'white'}}>Join as Charity</Link> </Button>
        </Box>
      </Box>
      <Box backgroundColor='#F8EB7D'>
        <img src="https://fujioriental.com/ca_ES/web_editor/shape/illustration/themunchies-family-style-restaurant-food-lunch-meal-dessert-party-casual-svg-588?unique=6fea5a23&c1=%2392B475" />
        
      </Box>
    </>
  );
}

function HeroSection1() {
  return (
    <Box>
      <img
        src=""
        alt=""
        width="100%"
        background-repeat="no-repeat"
        bottom="10%"
      />
    </Box>
  );
}

export default HeroSection;

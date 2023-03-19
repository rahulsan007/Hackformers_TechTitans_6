import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Paper from "@mui/material/Paper";
import CardsButton from "./CardsButton";
import Category  from "./Category";
import FoodCard from "./FoodCard";


const Dashboard = () => {
  
  return (
    <>
    <Box sx={{alignItems: "center", background:'#f7f7f2',padding:'20px'}}  m="auto">
      <Category/>
    </Box>
    <Box>
       <FoodCard/>
    </Box></>
    
  );
};

export default Dashboard;

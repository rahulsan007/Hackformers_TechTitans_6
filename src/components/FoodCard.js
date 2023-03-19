import  React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FoodCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
    <Box sx={{display:'flex'}}>
   {data.map(item =>(
     <Card key={item.name} sx={{ maxWidth: 345,borderTopLeftRadius:'20px',borderTopRightRadius:'20px', margin:'6px', display: isMobile ? "none" : "block"   }}>
     <CardMedia
       sx={{ height: 300, width:300, borderTopLeftRadius:'20px',borderTopRightRadius:'20px', }}
       image='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
       title="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        {item.name}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {item.desc}
       </Typography>
     </CardContent>
     <CardActions>
       <Typography sx={{textDecoration:'line-through', color:'#70706f'}}>{item.reamount}</Typography>
       <Typography >{item.discount}</Typography>
     </CardActions>
     <CardActions sx={{justifyContent:'space-between'}}>
     <Button variant="contained" sx={{'&:hover': { backgroundColor: '#4a4a4a' }, background:'#000'}} endIcon={<ArrowForwardIosIcon/>}>Order Now</Button>
     <IconButton sx={{color:'white', background:'green', borderRadius:'4px'}}>
          <Typography>3.5</Typography> <GradeIcon/>
     </IconButton>
     </CardActions>
   
   </Card>
  //  
   ))}
    </Box>
  );
}
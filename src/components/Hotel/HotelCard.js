import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function FoodCard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    
  return (
    <>
        <Card sx={{ maxWidth: 345,borderTopLeftRadius:'20px',borderTopRightRadius:'20px', margin:'6px', display: isMobile ? "none" : "block"  }}>
      <CardMedia
        sx={{ height: 300, width:300, borderTopLeftRadius:'20px',borderTopRightRadius:'20px', }}
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Khana
        </Typography>
        <Typography variant="body2" color="text.secondary">
          delivered from <span>Hotel</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{textDecoration:'line-through', color:'#70706f'}}>$200</Typography>
        <Typography >$100</Typography>
      </CardActions>
      <CardActions sx={{justifyContent:'space-between'}}>
      <Button variant="contained" sx={{'&:hover': { backgroundColor: '#4a4a4a' }, background:'#000' }}  endIcon={<ArrowForwardIosIcon/>}>View Order</Button>
     
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: '60%', margin:'0px', display: isMobile ? "block" : "none" , marginBottom:'9px' }}>
      <CardMedia
        sx={{ height: 200, width:200,  }}
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Khana
        </Typography>
        <Typography variant="body2" color="text.secondary">
          delivered from <span>Hotel</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{textDecoration:'line-through', color:'#70706f'}}>$200</Typography>
        <Typography >$100</Typography>
      </CardActions>
      <CardActions sx={{justifyContent:'space-between'}}>
      <Button variant="contained" sx={{'&:hover': { backgroundColor: '#4a4a4a' }, background:'#000' }}  endIcon={<ArrowForwardIosIcon/>}>View Order</Button>
     
      </CardActions>
    </Card>
    </>
    
  );
}
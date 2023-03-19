import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MultiActionAreaCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/donate.json')
      .then(response => response.json())
      .then(data => {
        const dataArray = Object.keys(data).map(key => {
          const item = data[key];
          return {
            name: item.name,
            desc: item.desc,
            pick: item.pick,
            deit: item.deit,
            
          };
        });
        setData(dataArray);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Box sx={{display:'flex'}}>
      {data.map(item =>(<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' sx={{background:'#000', "&:hover":{background:'#444'}}}>
          Share
        </Button>
      </CardActions>
    </Card> ))}
    </Box>
    
  );
}
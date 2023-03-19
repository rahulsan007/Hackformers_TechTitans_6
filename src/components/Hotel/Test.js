// import React from 'react'

import { CardActions, CardContent, CardMedia, Typography } from "@mui/material";

// const Test = () => {
//     function handleSubmit(event) {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         const requestData = {
//           method: 'POST',
//           body: JSON.stringify({
//             name: formData.get('name'),
//             email: formData.get('email'),
//           }),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         };
//         fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com//formData.json', requestData)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Failed to save form data');
//             }
//             alert('Form data saved!');
//           })
//           .catch(error => {
//             console.error(error);
//             alert('Failed to save form data');
//           });
//       }
      
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email:
//         <input type="email" name="email" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
      
//     </div>
//   )
// }

// export default Test

// import React, { useState, useEffect } from 'react';

// function DisplayData() {
//   const [emails, setEmails] = useState([]);

//   useEffect(() => {
//     fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/hotel.json')
//   .then(response => response.json())
//   .then(data => {
//     Object.keys(data).forEach(key => {
//       const item = data[key];
//       const amount = item.amount;
//       const desc = item.desc;
//       const discount = item.discount;
//       const email = item.email;
//       const file = item.file;
//       const name = item.name;
//       const reamount = item.reamount;
      
//       console.log(amount, desc, discount, email, file, name, reamount);
//       // do something with the data
//     });
//   })
//   .catch(error => console.log(error));

//   return (
//     <div>
//       <h2>Emails:</h2>
     
//     </div>
//   );
// }

// export default DisplayData;

// import React, { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     fetch('https://dhdihfd-e65d8-default-rtdb.firebaseio.com/hotel.json')
//       .then(response => response.json())
//       .then(data => {
//         Object.keys(data).forEach(key => {
//           const item = data[key];
//           const amount = item.amount;
//           const desc = item.desc;
//           const discount = item.discount;
//           const email = item.email;
//           const file = item.file;
//           const name = item.name;
//           const reamount = item.reamount;

//           console.log(amount, desc, discount, email, file, name, reamount);
//           // do something with the data
//         });
//       })
//       .catch(error => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h1>Heelo</h1>
//     </div>
//   );
// }

// export default MyComponent;

import { TableHead,Card, Table,  TableRow, TableCell, TableBody } from '@mui/material';
import React, { useState, useEffect } from 'react';


const MyCard = () => {
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
<Card sx={{display: 'flex'}}>

      
          {data.map(item => (
            
            <CardContent key={item.name}>
               <Typography gutterBottom variant="h5" component="div">
           {item.name}
         </Typography>
           <Typography gutterBottom variant="h5" component="div">
           {item.reamount}
         </Typography>
         <CardActions>
        <Typography sx={{textDecoration:'line-through', color:'#70706f'}}>{item.reamount}</Typography>
        <Typography >{item.discount}</Typography>
      </CardActions>
         </CardContent>
          ))}
              
    </Card>
  );
}

export default MyCard;



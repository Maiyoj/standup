import './App.css';
import {useEffect, useState} from "react"
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';


function App() {
  const[accommodations, setAccommodation] = useState([])
  useEffect(()=>{
    fetch('/accommodations')
    .then((res)=> res.json())
    .then((data) =>{
     setAccommodation(data)
    //  console.log(accommodation)
    })
  },[])
  return (
   <>
       <CssVarsProvider>
         <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", m: 2}}>
      
  
   {
    accommodations.map((accommodation)=>{
      return (
      // <li>
      //   <h3>name: {accommodation?.name}</h3>
      //   <h3>name: {accommodation?.location}</h3>
      // </li>
     
  
     <>
      <Card variant="outlined" sx={{ width: 320, margin: 2, display: "flex"}}>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        Name: {accommodation?.name}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        Location: {accommodation?.location}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        Accomodation_ID: {accommodation?.accommodation_id}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        checkin: {accommodation?.checkin}
      </Typography>
      <Divider />
      </Card>
      </>
   
      )
    })
   }
    
    </Box>
    </CssVarsProvider>
   </>
  );
}

export default App;

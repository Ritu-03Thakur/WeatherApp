import React from 'react' ; 
import "./Description.css" ; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AirIcon from '@mui/icons-material/Air';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';


const Description = ({weather , units}) => {

  const tempUnit = units === "metric" ? " °C" : " °F" ; 
  const windUnit = units === "metric" ? "m/s" : "m/h" ; 

const cards = [
  {
    id : 1 , 
    icon : <ArrowDownwardIcon /> , 
    title : "min" , 
    data : weather.temp_min.toFixed() , 
    unit : tempUnit , 
  }, 
  {
    id : 2 , 
    icon : <ArrowUpwardIcon /> , 
    title : "max" , 
    data : weather.temp_max.toFixed() , 
    unit : tempUnit , 
  }, 
  {
    id : 3 , 
    icon : <TagFacesIcon /> , 
    title : "feels like" , 
    data : weather.feels_like.toFixed() , 
    unit : tempUnit , 
  }, 
  {
    id : 4 , 
    icon : <CompressOutlinedIcon /> , 
    title : "pressure" , 
    data : weather.pressure , 
    unit : "hPa" , 
  }, 
  {
    id : 5 , 
    icon : <InvertColorsOutlinedIcon /> , 
    title : "humidity" , 
    data : weather.humidity , 
    unit : "%" , 
  }, 
  {
    id : 6  , 
    icon : <AirIcon /> , 
    title : "Wind Speed" , 
    data : weather.speed.toFixed() , 
    unit : windUnit , 
  }, 
]

  return (
    <div  className='box'>
      {cards.map(({id, icon , title , data , unit })=>(
        
        <Card  className= "card" style={{backgroundColor : "rgb(206 201 229 / 52%)" , color : "#03082e"}}>
      <CardContent key={id} >
        <div className="description-card-icon">
          {icon}
            <span>{title}</span>
        </div>
        <h3>{`${data} ${unit}`} </h3>
      </CardContent>
    </Card>
      ))}

    
     
    </div>
  )
}

export default Description ; 

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./item.css";
//components

const Item = ({ data }) => {
  console.log(data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
        component="img" 
        height="140" 
        alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            data.id{data.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Item;

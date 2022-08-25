import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./card.css";

const card = ({ name, description, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <button>Agregar Carrito</button>
      <button>Quitar Carrito</button>
    </Card>
  );
};

export default card;

import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './Review.css';
import { Rating } from "@mui/material";
const Review = ({ review }) => {
  const { name,designation, img, desc,rating } = review;
   
  return (
    <div>
      <Card  className="review-card">
        <div className="d-flex align-items-center justify-content-center">
          <CardMedia
            component="img"
            sx={{ height: "100px", width: "100px", borderRadius: "50%" }}
            image={img}
            alt="green iguana"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {designation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc.slice(0,90)}
          </Typography>
        
      <Rating className="my-3" name="read-only" value={rating} readOnly />
        </CardContent>
      </Card>
    </div>
  );
};

export default Review;

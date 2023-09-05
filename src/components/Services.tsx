import { Grid, Typography } from "@mui/material";
import React, { SyntheticEvent, useMemo } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import tiling from '../assets/tiling.jpg'
import flooring from '../assets/flooring.jpg'
import painting from '../assets/painting.jpg'
import decorating from '../assets/decorating.webp'
import plumbing from '../assets/plumbing.jpeg'
import gardening from '../assets/gardening.jpg'

const services = [
  {
    name: "Tiling",
    ima: tiling,
    text: "",
    list: [
      "Domestic tiling",
      "Kitchen tiling",
      "Bathroom tiling"],
  },
  {
    name: "Flooring",
    ima: flooring,
    text: "",
    list: [
      "Hardwood flooring",
      "Laminate flooring",
      "Parquet flooring",
      "Engineered wood flooring",
      "Skirting",
    ]
  },
  {
    name: "Painting",
    ima: painting,
    text: "",
    list: [
      "External walls",
      "Windows",
      "Doors",
      "Internal painting",
      "Wallpapering"
    ],
  },
  {
    name: "Decorating",
    ima: decorating,
    text: "",
    list: [
      "",
      "",
      ""],
  },{
    name: "Plumbing",
    ima: plumbing,
    text: "",
    list: [
      "",
      "",
      ""],
  },
  {
    name: "Gardening",
    ima: gardening,
    text: "",
    list: [
      "",
      "",
      ""],
  },
]

const Services = () => {


  const ImgMediaCard = (service: {name: string, ima: string, text: string, list: Array<string>}) => {
    return (
      <Card sx={{ width: 333, margin: 2 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault()}}
          image={service.ima}
        />
        <CardContent>
          <Grid container direction="row" spacing={5}>
            <Grid item>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          </Grid>
          <Grid item>
          <Button variant={"outlined"}>BOOK NOW</Button>
          </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {service.text}
          </Typography>
          <ol>
          {service.list.map((s) => <li> <Typography>{s}</Typography></li>)}
          </ol>
        </CardContent>
        <CardActions>

        </CardActions>
      </Card>
    );
  }


    return <Grid container  sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="row" >
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        {/* <Grid sx={{ paddingTop: 2}} item > */}
          <Grid  alignItems="center" >
            {/* <Grid item> */}
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"Available Services"}</Typography>
            </Grid>
            <br></br>
            <Typography variant="subtitle2">{"See the range of services provided"}</Typography>
            <br></br>
            <Grid container direction="row" >
            {/* <Grid item> */}
            {services.map((id) => ImgMediaCard(id))}
            {/* </Grid> */}
            {/* </Grid> */}
            </Grid>
            </Grid>
        {/* </Grid> */}
    </Grid>
}

export default Services;
import { Card, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const reviews = [
  {
    name : 'Albert Einstein',
    rating: 5,
    text: 'Top service, will be back!!!!'
  },
  {
    name : 'Arnold Sczwarzznegger',
    rating: 5,
    text: 'Zer gud! Very fast hands!'
  },
  {
    name : 'Tom Hanks',
    rating: 4,
    text: 'Amazing service. Better than Aramark! ',
  },{
    name : 'Jessica Roberts',
    rating: 5,
    text: 'Got my pipes extremely clean! Thanks 🪠'
  },
  {
    name : 'Average Joe',
    rating: 5,
    text: 'Respect, best service I have ever had!!!! 😊'
  },{
    name : 'Gustavo Trunk',
    rating: 5,
    text: 'Definitely best service in Ireland! 💪'
  }
]

const Reviews = () => {

    return <Grid  sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="row">
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        <Grid sx={{ paddingTop: 2}} item >
          <Grid container alignItems="center">
            {/* <Grid item> */}
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"Reviews"}</Typography>
            {/* </Grid> */}
            <br></br>
            <Typography variant="subtitle2">{"Latest reviews from customers"}</Typography>
            <br></br>
            </Grid>
            <Grid container>
              {reviews.map((review) => <Grid sx={{padding: 2, margin: 2, width: '30%'}} elevation={0} component={Card} item>
                <Typography variant={"h6"}>{review.name}</Typography>
                <Rating
                  readOnly
                  name="simple-controlled"
                  value={review.rating}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
                <Typography>{review.text}</Typography>

                </Grid>)}
            </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Reviews;
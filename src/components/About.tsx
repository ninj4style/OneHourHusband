import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {

    return <Grid  sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        minHeight: 500,
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="row">
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        <Grid sx={{ paddingTop: 2}} item alignItems="center">
          <Grid  alignItems="center">
            {/* <Grid item> */}
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"About Us"}</Typography>
            {/* </Grid> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container direction="column" justifyContent={"center"} alignItems="center">
              <Grid item>
            <Typography variant="h6">{"We have been providing quality handyman services for over 15 years in Ireland, Dublin"}</Typography>
            </Grid>
            <br></br>
            <Grid item>
            <Typography>{"100s of happy customers across the island"}</Typography>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default About;
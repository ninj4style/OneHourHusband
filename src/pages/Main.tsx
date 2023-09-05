import { Grid } from "@mui/material"

import ServiceBooking from "../components/ServiceBooking";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Contact from "../components/Contact";
import React from "react";
import NavBar from "../components/NavBar";
import Reviews from "../components/Reviews";

const Main = () => {


    return <Grid>
        <NavBar/>
            <Grid sx={{marginTop: "100px"}} direction="column">
                <Grid item id="book-a-service">
                    <ServiceBooking/>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid item id="services">
                    <Services/>
                </Grid>

                <Grid item id="gallery">
                <br></br>
                <br></br>
                <br></br>
                    <Gallery/>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid item id="reviews">
                    <Reviews/>
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid item id="about">
                    <About />
                </Grid>
                <br></br>
                <br></br>
                <br></br>
                <Grid item id="contact">
                    <Contact/>
                </Grid>
                <br></br>

            </Grid>
    </Grid>
}

export default Main;
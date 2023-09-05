import { AppBar, Box, Button, Grid, IconButton, Tab, Tabs, Toolbar, Typography, } from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import logo from '../assets/logo.png'
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import ChatIcon from "@mui/icons-material/Chat";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
          if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
            // setShow(false);
          } else { // if scroll up show the navbar
            // setShow(true);
          }

          // remember current page location to use in the next move
          setLastScrollY(window.scrollY);
        }
      };

      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);

          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

    const pages = [
        'BOOK A SERVICE',
        'SERVICES',
        'GALLERY',
        'REVIEWS',
        'ABOUT',
        'CONTACT']
    const [value, setValue] = React.useState(0);
    const [anchorMainMenu, setAnchorMainMenu] = React.useState<null | HTMLElement>(null);
    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorMainMenu(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorMainMenu(null);
      };

      const navToSection = (event: React.MouseEvent<HTMLElement>, id: string) =>
      {
          let element = document.getElementById(id)
          event.preventDefault()
          if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"})
          }
      }

    return (
        <AppBar elevation={0} position="fixed" sx={{height: 100, display: !show ? 'none': null, backgroundColor: 'white'}}>
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>

            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            onClick={handleClickMenu}
            style={{color: "blue", fill: "blue"}}
            >
            <MenuIcon />
            </IconButton>
            <Menu

            id="menu-appbar"
            anchorEl={anchorMainMenu}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorMainMenu)}
            onClose={handleClose}
            sx={{
                display: { xs: "block", sm: "block", md: "none" },
            }}
            >
            {pages.map((page, idx) => (
                <MenuItem key={"page-idx-" + idx}
                // onClick={() => {navigate(routes[idx])}}
                >
                <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <Grid  container alignItems="center" justifyContent={"start"} spacing={5}>
            <Grid item>
              <Box component={"img"}  onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault();}} sx={{width: {xs: "180px", md: '200px'}}} src={logo} alt="logo" />
            </Grid>
            <Grid item sx={{display: { md: "flex", sm: "none", xs: "none" }}}>
            <Tabs

            variant="standard"
            value={value}

            onChange={handleChange}
            aria-label="icon position tabs example"
            >
                <Tab onClick={(e) => {navToSection(e, "book-a-service")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="BOOK A SERVICE"></Tab>
                <Tab onClick={(e) => {navToSection(e, "services")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="SERVICES" />
                <Tab onClick={(e) => {navToSection(e, "gallery")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="GALLERY" />
                <Tab onClick={(e) => {navToSection(e, "reviews")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="REVIEWS" />
                <Tab onClick={(e) => {navToSection(e, "about")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="ABOUT" />
                <Tab onClick={(e) => {navToSection(e, "contact")}} sx={{fontSize: {xs: 12, md: 12, lg: 14, xl: 20 }}} iconPosition="start" label="CONTACT" />


            </Tabs>
            </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;
import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { SyntheticEvent, useMemo, useState } from "react";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { MuiTelInput } from "mui-tel-input";
const Contact = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')

  const handleClear = () => {
    setDescription('')
    setEmail('')
    setFullName('')
    setSubject('')
  }
  const stepThree = useMemo(() => {
    return <Grid >
      <br></br>

      <Grid container spacing={1.5} justifyContent={"space-between"} sx={{paddingBottom: 2}} >
      <Grid item width={"50%"}>
      <TextField value={fullName}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
      fullWidth size="medium" label="Full Name"></TextField>
      </Grid>
      <Grid item width={"50%"}>
      <TextField value={email}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
       fullWidth label="Email" required ></TextField>
      </Grid>
      </Grid>
      <Grid container direction="column" spacing={3}>
      <Grid item>
      <TextField value={subject}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
       label="Subject" multiline={true} maxRows={5} required sx={{width: "100%"}}></TextField>
      </Grid>
      <Grid item width={"100vh"}>
      <TextField value={description}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
        label="Description" multiline={true} maxRows={5} required sx={{width: "100%"}}></TextField>
      </Grid>
      {/* <Button
        variant="contained"
        component="label"
      > */}
        {/* Upload File */}
        <Grid item>
          <input
            multiple
            type="file"
            // hidden
          />
        </Grid>
        <Grid item>
        <Button size="small" variant="contained" disabled={!email || !description || !subject}>
              {'SEND EMAIL'}
            </Button>
            <Button onClick={handleClear} size="small" variant="text">
              {'CLEAR'}
            </Button>
            </Grid>
        </Grid>
      {/* </Button> */}
      <br></br>
      <br></br>

    </Grid>
  }, [description, email, fullName, subject])

const ContactCard = useMemo(() => {

  return (
    <Card sx={{ minWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            VM
          </Avatar>
        }
        title="Vlad Mattanelli"
        subheader="Man-of-all-work"
      />
      <CardContent>
      <Grid container spacing={2}>
          <Grid item>
          <CallIcon></CallIcon>
          </Grid>
          <Grid item>
        <Typography variant="body2" color="text.secondary">
        +353 87 777 8875
        </Typography>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
          <EmailIcon></EmailIcon>
          </Grid>
          <Grid item>
        <Typography variant="body2" color="text.secondary">
        vlad@onehourhusband.ie
        </Typography>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
          <AccessTimeIcon></AccessTimeIcon>
          </Grid>
          <Grid item>
        <Typography variant="body2" color="text.secondary">
        Mon-Fri 9-17
        </Typography>
        </Grid>
        </Grid>
        <br></br>
        <Typography color="text.secondary" variant={"body2"}>Spoken languages</Typography>
        <br></br>
        <Grid container spacing={1}>
          <Grid item>
        <Chip size="small" label={"English"} color="primary" />
        </Grid>
        <Grid item>
        <Chip size="small" label={"Czech"} color="primary" />
        </Grid>
        <Grid item>
        <Chip size="small" label={"Russian"} color="primary" />
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}, [])

    return <Grid  sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="row">
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        <Grid sx={{ paddingTop: 0}} item >
          <Grid container>
            {/* <Grid item> */}
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"Contact Us"}</Typography>
            {/* </Grid> */}
            <br></br>

            </Grid>


            <Grid spacing={8}  sx={{ paddingTop: 0}} item container direction="row">
              <Grid item>
            <Typography variant="body1">{"Contact Details"}</Typography>
            <br></br>
            {ContactCard}
            </Grid>
            {/* <Grid  alignItems="center"> */}
              {/* <Grid item> */}
              <Grid item>
              <Typography variant="body1">{"Contact Form"}</Typography>
              {/* <br></br> */}
              {stepThree}
              <br></br>
              <br></br>
              {/* {MainCardArea} */}
              </Grid>
              {/* </Grid> */}
              <Grid item >
              {/* {FormControlLabelPosition} */}
              <Grid container justifyContent="center">
            {/* {StandardImageList} */}
            </Grid>
            <Grid container item justifyContent="center">
            {/* <Pagination onChange={handlePageChange} count={Math.ceil(itemData.length/12)} color="primary" /> */}
            </Grid>
            </Grid>

            </Grid>
            </Grid>
        </Grid>
    </Grid>
}

export default Contact;
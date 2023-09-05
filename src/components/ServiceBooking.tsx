import { Box, Card, CardActionArea, CardMedia, createTheme, Grid, Paper, Stepper, ThemeProvider, Typography } from "@mui/material";
import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/landing_image.png'
import success from '../assets/success.png'
import tiling from '../assets/tiling.png'
import flooring from '../assets/flooring.png'
import plumbing from '../assets/plumbing.png'
import gardening from '../assets/gardening.png'
import decorating from '../assets/decorating.png'
import painting from '../assets/painting.png'
import other from '../assets/other.png'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useMemo } from "react";
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useEffect } from "react";
import { useState } from "react";
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  MuiTelInputContinent
} from 'mui-tel-input'



  const continents: MuiTelInputContinent[] = ['EU']





  const steps = ['Select job type', 'Select date and time', 'Fill in details'];




// const useStyles = makeStyles(() => ({
//     header: {
//       position: "absolute",
//       padding: '20px 0px 20px 20px',
//       height: '60px',
//     },
//     logoTitle: {
//       paddingLeft: 10,
//       textDecoration: 'none',
//     //   color: globalConfig['primaryMain']
//     },
//   }));

const images = [
    {
        ima: tiling,
        title: "Tiling",
        path: "/user_settings",
        component: "User_Settings",
    },
    {
        ima: flooring,
        title: "Flooring",
        path: "/settings",
        component: "Settings",
    },
    {
        ima: painting,
        title: "Painting",
        path: "/user_settings",
        component: "User_Settings",
    },
    {
        ima: decorating,
        title: "Decorating",
        path: "/settings",
        component: "Settings",
    },
    {
        ima: plumbing,
        title: "Plumbing",
        path: "/user_settings",
        component: "User_Settings",
    },
    {
        ima: gardening,
        title: "Gardening",
        path: "/settings",
        component: "Settings",
    },
    {
        ima: other,
        title: "Other",
        path: "/settings",
        component: "Settings",
    },
]
const ServiceBooking = () => {
    const theme = createTheme();

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [selectedJobType, setSelectedJobType] = React.useState('')
    const isStepOptional = (step: number) => {
      return step === 1;
    };

    const isStepSkipped = (step: number) => {
      return skipped.has(step);
    };

    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    const handleChooseJobType = (title: string) => {
      setSelectedJobType(title)
    }

    const stepOne = useMemo(() => {
      return    <Grid
      justifyContent="center"
        // minHeight={"90vh"}
        container
        xs={20}
        // md={10}
        style={{paddingTop: 20, paddingBottom: 40}}
        spacing={{ xs: 1, sm: 2, md: 4, }}
        columns={{ xs: 8, sm:12, md: 12 }}
      >
      {images.map((pic, index) => pic.ima !== null ? (
        <Grid container justifyItems="center" justifyContent="center" item xs={6} sm={3} md={3} key={index}>
          <Card
          onClick={() => {handleChooseJobType(pic.title)}}
          onMouseEnter={(e) => {e.preventDefault(); e.stopPropagation()}}
          sx={{boxShadow: 3, border: selectedJobType === pic.title ?  '3px solid blue' : null,  transform: selectedJobType === pic.title ? "scale(1.05)" : null,
            ':hover': { backgroundColor: 'lightblue', boxShadow: 10,WebkitBoxShadow: '0px 0px 20px 0px lightblue',
            border: selectedJobType === pic.title ?  '3px solid blue' : '1px solid blue', boxSizing: 'border-box',
            transform: "scale(1.05)", transition: "boxShadow, border, backgroundColor, transform 0.4s" // theme.shadows[20]
            }, transition: "backgroundColor, transform 0.2s", backgroundColor:"#FFF",  maxHeight: 1000, margin: '0 auto' }} variant="outlined">
            <CardActionArea
              style={{
                backgroundPosition: "center",
                backgroundColor:"white",
                  backgroundRepeat: "repeat",
                  // height: "50%",
                  // width: "200px",
                  // maxWidth: "200px",
                  }}>
                    <Grid   justifyContent={"center"} justifyItems={"center"}  container>
                        <Grid item justifyContent="center" container >
              <CardMedia

                sx={{
                  // padding: '30px', // 16:9,
                  // margin: '20px',
                  // position: "absolute",
                  opacity: 0.7,
                //   objectFit: 'cover',
                  marginTop: {xs: 1, md: 2, lg: 3, xl: 3},
                  width: {xs: '50%'},
                  // textColor: 'orange',
                }}
                onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault();}}
                component="img"
                // className={classes.media}
                alt="green iguana"
                // height={120}
                image={pic.ima}
              />
              </Grid>
              <Grid item>

              {/* <ThemeProvider theme={theme}> */}
            <Typography
              // xs={1}
              fontSize={{xs: 6, sm: 8, md: 11, lg: 15, xl: 22}}
              gutterBottom
              variant="overline"
              component="div"
              color="black"
              className="title"
            >
              {pic.title}
            </Typography>
            </Grid>
            </Grid>
            {/* </ThemeProvider> */}
            </CardActionArea>

          </Card>

          </Grid>
      ) : null)}
      </Grid>}, [selectedJobType])
  const today = new Date()
  const [tomorrow, setTomorrow] = React.useState(new Date())
  const [minDate, setMinDate] = React.useState<Dayjs | undefined>(
    undefined
  );
  const [value, setValue] = React.useState<Dayjs | null>(
    null
  );

  const [mobileValue, setMobileValue] = useState('+353')
  useEffect(() => {
    const newTomorrow = tomorrow
    newTomorrow.setDate(today.getDate() + (today.getDay() === 5 ? 3 : today.getDay() === 6 ? 2 : 1))
    setTomorrow(newTomorrow)
    console.log(newTomorrow)
    setMinDate(dayjs(newTomorrow.toJSON().slice(0,10).replace(/-/g,'/')).set('hour', 12))
    setValue(dayjs(newTomorrow.toJSON().slice(0,10).replace(/-/g,'/')).set('hour', 12))
  }, [])



  const handleMobileChange = (newValue: string, info: MuiTelInputInfo) => {
    setMobileValue(newValue)
    console.log(newValue)
  }





  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

    const stepTwo = useMemo(() => {

      return <Grid>
        <br></br>
        <br></br>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          minDate={minDate}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{width: "50%"}} {...params} />}
        />
        {/* <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{width: "50%"}} {...params} />}
        />
        <br></br>
        <br></br>
        {/* <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
      </Stack>
    </LocalizationProvider>
      </Grid>
    }, [value])

  //   function handleOnChange(value) {
  //     setMobileValue({
  //        phone: value
  //     });
  //  }

    const stepThree = useMemo(() => {
      return <Grid >
        <br></br>
        <br></br>
        <Grid container spacing={1.5} justifyContent={"space-between"} sx={{paddingBottom: 2}} >
        <Grid item width={"50%"}>
        <TextField fullWidth size="medium" required label="Full Name"></TextField>
        </Grid>
        <Grid item width={"50%"}>
        <TextField fullWidth label="Email" required ></TextField>
        </Grid>
        </Grid>
        <Grid container direction="column" spacing={3}>

        <Grid item>
        <TextField label="Description" multiline={true} maxRows={5} required sx={{width: "100%"}}></TextField>
        </Grid>
        <Grid item>
        <MuiTelInput
        required
        value={mobileValue}
        label={"Mobile Phone"}
        onChange={handleMobileChange}
        continents={continents}
        sx={{width: "50%"}}
        // excludedCountries={excludedCountries}
    />

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
          </Grid>
        {/* </Button> */}
        <br></br>
        <br></br>

      </Grid>
    }, [mobileValue])

    return <Grid container sx={{
          paddingTop: {xs: 2, sm: 0, md: 0},
          // paddingLeft: {xs: 0, sm: 1, md: 2},
          paddingLeft: {xs: 5, sm: 10, md: 15},
          paddingRight: {xs: 5, sm: 10, md: 15}
          // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
        }} justifyContent="space-between" alignItems="center"  direction="row">
                  <Box sx={{ width: '100%' }}>
          <br></br>
          {/* <br></br> */}
      <Stepper activeStep={activeStep} sx={{marginLeft: {xs: 5, sm: 10, lg: 20}, marginRight: {xs: 5, sm: 10, lg: 20}}}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} >
              <StepLabel StepIconProps={{
                sx: {
                  root: {
                  "&:Mui-completed": {
                    color: "green"
                  },
                  "&:Mui-active": {
                    color: "blue"
                  },
                },
                },
              // text:   classes.text,

    }} sx={{color: "orange"}} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box> */}
        </React.Fragment>
      ) : null}
      <br></br>
    </Box>
        <Grid sx={{width: "50%", paddingTop: 2}} item >
          <Grid container alignItems="center">
            <Grid item>
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{activeStep === 3 ? "Booking Successful!" : "Make Your booking with us today!"}</Typography>
            </Grid>
            <Grid item sx={{display: activeStep !== 3 ? 'none' : null}}>
            <Box component={"img"}  onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault();}} sx={{width: {md: '100px'}}} src={success} alt="success" />
            </Grid>
            </Grid>
            {activeStep === 3 ?
            <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"All set! Thank you for using our service!"}</Typography> : null}
            <br></br>
            {/* <br></br> */}
            <Typography variant="subtitle2">{
              activeStep === 0 ? "Please select a type of service you require" :
              activeStep === 1 ? "Please select provisional date and time to be confirmed" :
              activeStep === 2 ? "Please fill in contact form details and upload relevant photos" :
              activeStep === 3 ? "We will be in touch about your booking to confirm or reschedule the date within 24 hours or by the end of the next business day."
              :
               null}</Typography>
               {activeStep === 3 ? <br></br> : null}
               {activeStep === 3 ?
            <Typography variant="subtitle2">{"Make sure to periodically check the email you have provided for further communication." }</Typography> : null}
            {/* <Box sx={{ flexGrow: 1 }}> */}

          {activeStep === 0 ? stepOne : activeStep === 1 ? stepTwo : activeStep === 2 ? stepThree : null}

          {activeStep === 3 ? null :
          <Grid justifyContent="center" container>

          <Button size="small"  sx={{width:"80%"}} variant="contained" onClick={handleNext} disabled={!selectedJobType}>
              {activeStep === steps.length - 1 ? 'Finish' : 'CLICK TO CONTINUE'}
            </Button>
            <Button size="small"
              sx={{
                width:"20%",
                display: activeStep === 0 ? 'none' : null,
                }} variant="text" onClick={handleBack} disabled={!selectedJobType}>
              {activeStep === steps.length - 1 ? 'CANCEL' : 'CANCEL'}
            </Button>
            </Grid>
}
          {/* </Box> */}
        </Grid>


        <Grid item width={"50%"} sx={{
                width: {xs: "40%", md: '40%'},
                textAlign: "center",
                display: {xs: "none", sm: "none", md: "block"},
                zIndex: -1
            }}>
          <CardMedia component={"img"} onDragStart={(e: SyntheticEvent<Element, Event>) => {e.preventDefault();}} src={logo} width={"110%"} alt="logo" />
        </Grid>

    </Grid>
}

export default ServiceBooking;
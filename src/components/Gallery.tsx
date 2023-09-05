import { Chip, Grid, IconButton, Pagination, Stack, Typography } from "@mui/material";
import React, { SyntheticEvent, useMemo, useState } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box } from "@mui/system";

const itemData = [
  {
    id: 1,
    title: "Flooring job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://www.flooringinc.com/blog/wp-content/uploads/2019/10/vinyl-TritonCORE-Pro-722-Rigid-Core-Vinyl-Planks.jpg',
            'https://media.istockphoto.com/photos/worker-carpenter-doing-laminate-floor-work-picture-id1133685683?k=20&m=1133685683&s=612x612&w=0&h=ntp0WV7VJGBlrRbfCBvHLp3i7qX6_9OKe43oZMwq3ek=',
          ],
    mainTag: "Flooring",
  },
  {
    id: 2,
    title: "Tiling job",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Tiling"],
    images: ['https://www.myjobquote.co.uk/assets/img/tilers-1.jpg', 'https://www.gibtilingperth.com.au/wp-content/uploads/2021/03/gib-tiling-1.jpg'],
    mainTag: "Tiling",
  },
  {
    id: 3,
    title: "Painting job",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Painting", "Refurbishing"],
    images: ['https://uspropainters.com/wp-content/uploads/2020/08/painting-winter-blog.jpg'],
    mainTag: "Painting",
  },
  {
    id: 4,
    title: "Decorating job",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Decorating"],
    images: ['https://www.qcdesignschool.com/wp-content/uploads/2017/11/sleek-decor.jpg'],
    mainTag: "Decorating",
  },
  {
    id: 5,
    title: "Gardening job",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Gardening"],
    images: ['https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/uploads/job_description_template/Gardener.jpg'],
    mainTag: "Gardening",
  },
  {
    id: 6,
    title: "Plumbing and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['http://halbrookplumbing.com/wp-content/uploads/2018/01/demo-image-2.jpg'],
    mainTag: "Flooring",
  },
  {
    id: 7,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 8,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 9,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 10,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 11,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 12,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 13,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
  {
    id: 14,
    title: "Flooring and painting job refurbishing semi-detached house",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    tags: ["Flooring", "Refurbishing"],
    images: ['https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='],
    mainTag: "Flooring",
  },
];
const Gallery = () => {

  const [selectedPost, setSelectedPost] = useState(itemData[0])
  const [selectedImageId, setSelectedImageId] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const FormControlLabelPosition = useMemo(() => {
    return (
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox checked />}
            label="Tiling"
            labelPlacement="end"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox checked/>}
            label="Flooring"
            labelPlacement="end"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox checked/>}
            label="Painting"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox checked/>}
            label="Decorating"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox checked/>}
            label="Plumbing"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox checked/>}
            label="Gardening"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    );
  }, [])


const StandardImageList = useMemo(() => {
  return (
    <ImageList sx={{ width: 600, height: 450 }} cols={4}>
      {itemData.slice((selectedPage-1)*12, selectedPage*12).map((item) => (
        <ImageListItem
        onClick={(e: SyntheticEvent<Element,Event>) => {setSelectedPost(item); setSelectedImageId(0)}}
        sx={{overflow: "hidden"}} key={item.id}>
          <Box
            component={"img"}
            sx={{objectFit: 'cover', borderRadius: 2, border: selectedPost.id === item.id ? '5px solid blue' : null,  height: selectedPost.id === item.id ? '135px' : '145px', maxHeight: selectedPost.id === item.id ? '140px' : '150px'}}
            src={`${item.images[0]}`}
            srcSet={`${item.images[0]}`}
            id={item.title + item.id}
            alt={item.title + item.id}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}, [selectedPost.id, selectedPage])

  console.log(selectedImageId)

  const MainCardArea = useMemo(() => {
    return (
      <Grid container spacing={0}>


        <Grid item>
      <Card sx={{ maxWidth: 400, pointerEvents: 'none' }} onClick={(e: SyntheticEvent<Element, Event>) => {
              e.preventDefault();
              e.stopPropagation()

            }}>
        <CardActionArea  onClick={(e: SyntheticEvent<Element, Event>) => {
              e.preventDefault();
              e.stopPropagation()
            }}>
              {selectedPost.images.length > 1 ?
        <Grid size="small"
        onClick={(e: SyntheticEvent<Element, Event>) => {e.stopPropagation();
          setSelectedImageId(Math.abs(selectedImageId - 1) % selectedPost.images.length)}}
        component={IconButton} width={40}

        sx={{pointerEvents: 'auto', height: 300, position: 'absolute', zIndex: 100, opacity: 0.7, borderRadius: 0, backgroundColor: "lightgrey"}}>
          <ChevronLeft></ChevronLeft>
        </Grid>
        : null}
        {selectedPost.images.length > 1 ?
        <Grid  size="small" component={IconButton} justifyContent="center" alignItems="center" container item width={40}
        onClick={(e: SyntheticEvent<Element, Event>) => {setSelectedImageId((selectedImageId + 1) % selectedPost.images.length)}}
        sx={{ pointerEvents: 'auto', width: 40, borderRadius: '0px', height: 300, zIndex: 100, position: 'absolute', right: 0, margin: '0 auto', padding: 0, opacity: 0.7, backgroundColor: "lightgrey"}}>
          <ChevronRight></ChevronRight>
        </Grid>
        : null}
          <CardMedia
          sx={{pointerEvents: 'auto'}}
          onClick={(e: SyntheticEvent<Element, Event>) => {
            e.preventDefault();
            e.stopPropagation()

          }}
            component="img"
            height="300"
            image={selectedPost.images[selectedImageId]}
            alt="green iguana"

          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item>
            <Typography gutterBottom variant="body2" component="div">
              <b>{selectedPost.title}</b>
            </Typography>
            </Grid>
            <Grid item>
            <Typography variant="caption" color="text.secondary" component="div">
              {selectedPost.description}
            </Typography>
            </Grid>
            <Grid item>
            <Stack direction="row" spacing={1}>
              {selectedPost.tags.map((tag) => <Chip size="small" label={tag} color="primary" />)}
            </Stack>
            </Grid>
            </Grid>
          </CardContent>

        </CardActionArea>
        <CardActions>

        </CardActions>

      </Card>
      </Grid>

      </Grid>
    );
  }, [selectedPost, selectedImageId])

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setSelectedPage(value);
  };

    return <Grid container sx={{
        paddingTop: {xs: 2, sm: 0, md: 0},
        paddingLeft: {xs: 5, sm: 10, md: 15},
        // marginLeft: 10, marginRight: 10, marginBottom: 5, marginTop: 5
      }}  direction="column">
                {/* <Box sx={{ width: '100%' }}> */}
        <br></br>
        {/* <br></br> */}
        <Typography sx={{fontSize: { sm: 13, md: 17, lg: 21, xl: 25}}} variant="h5">{"Gallery"}</Typography>
            {/* </Grid> */}
            <br></br>
            {/* <Typography variant="subtitle2">{"See our latest jobs gallery"}</Typography>
            <br></br> */}

        <Grid spacing={3}  sx={{ paddingTop: 0}} item container direction="row">

          {/* <Grid  alignItems="center"> */}
            {/* <Grid item> */}
            <Grid item>
            <br></br>
            <br></br>
            <br></br>
            {MainCardArea}
            </Grid>
            {/* </Grid> */}
            <Grid item >
            {FormControlLabelPosition}
            <Grid container justifyContent="center">
        {StandardImageList}
        </Grid>
        <Grid container item justifyContent="center">
        <Pagination onChange={handlePageChange} count={Math.ceil(itemData.length/12)} color="primary" />
        </Grid>
        </Grid>

        </Grid>
        </Grid>

}

export default Gallery;
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Genre() {

{/* test data */}

    const genreName = "Test";
    const genreDescription ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et lorem erat. Donec metus enim, convallis lacinia vulputate at, convallis ac massa.";

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        
      ];

      

  return (
  
<Grid container direction="row"

    sx={{ height: '100vh' }}>

       <Grid item xs={12} sm={8} md={5} sx={{mx:'auto', minHeight: 100}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h4">
              {genreName}
            </Typography>
            <Typography component="h1" variant="h6" mt={2}>
              {genreDescription}
            </Typography>
            </Box>
            </Grid> 
<Grid item xs={8} sx={{mx:'auto', minHeight: 100 }} >
<Box display="flex" justifyContent="center">
<Typography component="h1" variant="h4">
              Popular books in {genreName}
            </Typography>
            </Box>
<Box display="flex" justifyContent="center">
<ImageList sx={{ width: '100vh', height: 200, xs: 2 }} cols={8} rowHeight={180}>
{itemData.map((item) => (
  <ImageListItem key={item.img}>
    <img
      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
      alt={item.title}
      loading="lazy"
    />
    <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
               
              </IconButton>
            }
          />
  </ImageListItem>
))}
</ImageList>
</Box>
</Grid>

<Grid item xs={5} sm={8} sx={{mx:'auto', minHeight:100 }} >
<Box display="flex" justifyContent="center">
<Typography component="h1" variant="h4">
              Popular authors in {genreName}
            </Typography>
            </Box>
<Box display="flex" flex-direction="column" justifyContent="center" mt={2}>
<AvatarGroup max={5} spacing={-5} >
  {/* do mapping for x most popular */}
<Avatar
              sx={{ width: 150, height: 150 }}
              src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
            />
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
            />
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
            />
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
            />
            <Avatar
              sx={{ width: 150, height: 150 }}
              src="https://d-art.ppstatic.pl/kadry/k/r/1/bf/9e/5c42e1d5985fc_o_medium.jpg"
            />
</AvatarGroup>
</Box>
</Grid>
</Grid>
  )
}

export default Genre
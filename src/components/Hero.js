import { Typography, Paper, Box, Grid } from '@mui/material'

const Hero = (props) => {
  const { heroData } = props
  console.log(heroData)
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${heroData.image})`,
        border: 4,
      }}
    >
      {
        <img
          style={{ display: 'none' }}
          src={heroData.image}
          alt={heroData.imageText}
        />
      }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 12 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {heroData.title}
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              gutterBottom
            >
              {heroData.subTitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Hero

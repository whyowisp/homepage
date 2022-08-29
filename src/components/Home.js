import { Grid, Divider } from '@mui/material'

const Home = ({ contentHome }) => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        fontSize: 20,
      }}
    >
      {contentHome}

      <Divider />
    </Grid>
  )
}

export default Home

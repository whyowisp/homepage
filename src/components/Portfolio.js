import { Typography, Grid, Divider } from '@mui/material'

const Portfolio = (props) => {
  const { posts, title } = props

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        fontSize: 20,
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => ({ post }))}
    </Grid>
  )
}

export default Portfolio

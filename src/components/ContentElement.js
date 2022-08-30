import { Typography, Grid, Divider, Link, Paper, Box } from '@mui/material'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const MasonryImageList = ({ itemData }) => {
  return (
    <Box sx={{ width: 600, height: 550, overflowY: 'hidden' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
const ContentElement = (props) => {
  const { content } = props

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        fontSize: 18,
      }}
    >
      {content.map((post) => (
        <div key={post.title}>
          <Paper
            elevation={0}
            sx={{ backgroundColor: 'white', padding: 1, margin: 3 }}
          >
            <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
              {post.title}
            </Typography>
            {post.git ? (
              <div>
                Git:<Link>{post.git}</Link>
              </div>
            ) : null}
            {post.media ? post.media : null}
            {
              <img
                style={{
                  width: '100%',
                  float: 'none',
                  marginTop: 20,
                }}
                src={post.image}
                alt={post.image}
              />
            }
            {post.imageList ? (
              <MasonryImageList itemData={post.imageList} />
            ) : null}
            <Typography sx={{ m: 1 }}>{post.content}</Typography>
            <Divider />
          </Paper>
        </div>
      ))}
    </Grid>
  )
}

export default ContentElement

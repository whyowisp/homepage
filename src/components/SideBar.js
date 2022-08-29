import {
  Typography,
  Link,
  Paper,
  Box,
  Grid,
  Divider,
  Stack,
  Card,
  CardContent,
  Avatar,
} from '@mui/material'

const SideBar = (props) => {
  const { sideBar } = props
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          fontSize: 14,
          bgcolor: 'grey.900',
          maxWidth: 345,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <CardContent>
            <Avatar
              alt="facetime avatar"
              src={sideBar.cardData.facetime}
              sx={{ width: 56, height: 56 }}
            />
          </CardContent>
          <Box sx={{ mt: 3, color: 'grey.200' }}>
            <Typography component="h5">{sideBar.cardData.name}</Typography>
            <Typography component="h6" sx={{ fontSize: 10 }}>
              {sideBar.cardData.title}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: 'grey.600' }} />
        <Box sx={{ fontSize: 16, m: 1 }}>
          <Link key={sideBar.cardData.email} href={sideBar.cardData.email}>
            {sideBar.cardData.email}
          </Link>
        </Box>
      </Card>
      <Divider sx={{ m: 2 }} />
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>{sideBar.about}</Typography>
      </Paper>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {sideBar.social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  )
}

export default SideBar

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

const Social = ({ social }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href={network.link}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </>
  )
}

const BusinessCard = ({ cardData }) => {
  return (
    <>
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
              src={cardData.facetime}
              sx={{ width: 56, height: 56 }}
            />
          </CardContent>
          <Box sx={{ mt: 3, color: 'grey.200' }}>
            <Typography component="h5">{cardData.name}</Typography>
            <Typography component="h6" sx={{ fontSize: 10 }}>
              {cardData.title}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: 'grey.600' }} />
        <Box sx={{ fontSize: 16, m: 1 }}>
          <Link key={cardData.email} href={cardData.email}>
            {cardData.email}
          </Link>
        </Box>
      </Card>
    </>
  )
}
const About = ({ about }) => {
  return (
    <>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>{about}</Typography>
      </Paper>
    </>
  )
}

//Parent
const SideBar = (props) => {
  const { sideBar } = props
  return (
    <Grid item xs={12} md={4}>
      <BusinessCard cardData={sideBar.cardData} />
      <Divider sx={{ m: 2 }} />
      <About about={sideBar.about} />
      <Divider sx={{ m: 2 }} />
      <Social social={sideBar.social} />
    </Grid>
  )
}

export default SideBar

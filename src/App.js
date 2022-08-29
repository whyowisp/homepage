import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Container } from '@mui/system'

import Header from './components/Header'
import Hero from './components/Hero'
import Home from './components/Home'
import SideBar from './components/SideBar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

import cartography from './images/seamap.png'
import facetime from './images/facetime.jpg'

//Page Data
const heroData = {
  title: 'Welcome to my web page',
  subTitle: '...and portfolio',
  image: cartography,
  imageText: 'Welcome message: Hello friend and welcome to my web pages',
}

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Portfolio', url: '/Portfolio' },
  { title: 'Hobbies', url: '/Hobbies' },
]

const contentHome = (
  <>
    <h1>Sample blog post</h1>

    <em>_April 1, 2020 by [Olivier](/)_</em>

    <p>
      This blog post shows a few different types of content that are supported
      and styled with Material styles. Basic typography, images, and code are
      all supported. You can extend these by modifying hehe.
    </p>

    <p>
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
      venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
      consectetur purus sit amet fermentum.
    </p>

    <p>
      Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis**
      ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>

    <p>
      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
      purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </p>

    <h2> Heading</h2>

    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
    </p>

    <h3>### Sub-heading 1</h3>
  </>
)

const about = (
  <>
    This web page is created using React with Google's material-UI. Project runs
    at Heroku server. No gimmigs here, just a plain simple web page focus on
    telling something about person in question, his achievements and interests.
    All packaged in nice wrappings and focus of it's contents to be easily
    extendable.
  </>
)

const sideBar = {
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
  cardData: {
    facetime: facetime,
    name: 'Mikko Sipola',
    title: 'Software engineer/fullstack developer',
    email: 'mikko.sipola@tutanota.com',
  },
  about: about,
}

//Functions
const Hobbies = () => {}
const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header title="Mikko´s pages" sections={sections} />
        <main>
          <Hero heroData={heroData} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Router>
              <Routes>
                <Route path="/" element={<Home contentHome={contentHome} />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/hobbies" element={<Hobbies />} />
              </Routes>
            </Router>
            <SideBar sideBar={sideBar} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}

export default App

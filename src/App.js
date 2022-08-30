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
import ContentElement from './components/ContentElement'
import Footer from './components/Footer'

import cartography from './images/seamap.png'
import facetime from './images/facetime.jpg'
import oldpage from './images/harj_screen.jpg'
import diaryapp from './images/diary.png'
import laika from './images/laika_preview.PNG'
import basso1 from './images/basso.jpg'
import basso2 from './images/basso_3.jpg'
import wheelbuilder from './images/wheelbuilder.jpg'
import pinnacle from './images/pinnacle_valmis.jpg'
import takaiskari from './images/takaiskari_34bar.jpg'
import paintjob from './images/monark_paintjob.jpg'

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
    at Heroku server. No gimmicks here, just a plain simple web page focus on
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

const post1 = {
  title: 'My home page v1.0',
  date: '29.05.2019',
  content: (
    <>
      Earlier version of this web page was implemented with plain html/css and
      while writing this, it's still{' '}
      <a href="https://student.labranet.jamk.fi/~N3120/mikonsivu/">available</a>
      . Page is responsive for both laptop and both tablets and phone screens,
      brakepoints at widths 600px and 800px. As design principle it's layout is
      for wider screens. Unfortunately menu items wont work/works poorly with
      smartphones so i recommend using mouse.
    </>
  ),
  image: oldpage,
}
const post2 = {
  title: 'Diary App with MysSQL/php/vanilla js',
  date: '30.11.2020',
  git: 'https://gitlab.labranet.jamk.fi/N3120/diary-app',
  content: (
    <>
      <>
        This project was my first fullstack project with now (2022) little bit
        outdated technologies, though they say php will never die. Subject of
        this exercise was a Diary App for alpha males. It is a true fullstack
        project from MySQL database to backend implementation trought
        server-side rendering to web page design. On the other hand the Drawing
        Tab is implemented with vanilla JS, so there we have some client side
        rendering also.
      </>

      <>
        On the main page there is MotD (message of the day) - functionality
        where messages from the host is shown; 'Good day, hello sir', for
        example, and a clock.
      </>

      <>
        The database is handled with full CRUD functionality starting from user
        management to saving users diary data. User drawing are <em>not</em>{' '}
        saved anywhere.
      </>

      <>
        The login page as a whole is quoted from elsewhere, only for the purpose
        for satisfying my hunger of knowledge, not as a showcase.
      </>
    </>
  ),
  image: diaryapp,
}
const post3 = {
  title: 'Laika Launch',
  date: '30.05.2020',
  git: 'https://gitlab.labranet.jamk.fi/N3120/laika-launch',
  content: (
    <>
      <>
        Laika Launch is a game where player launches Laika the Cosmonaut to the
        orbit and beyond, all the way till Mars. Laika will have to use
        assistance of gravitational pull from a black hole but be careful not to
        get sucked in. Also Laika could be launched too far and he would be lost
        forever in the vastness of space. Player can nudge his path little bit
        by assistance of his rocket engine. Player get's scores from successful
        landings and highscore will be saved until next playsession.
      </>
      <>
        The game was a part of UI exercise and for that reason it is implemented
        using WPF .NET framework (XAML/C#).
      </>
      <>
        To try this game please download and unzip{' '}
        <a href="https://student.labranet.jamk.fi/~N3120/mikonsivu/Laikalaunch_release.zip">
          https://student.labranet.jamk.fi/~N3120/mikonsivu/Laikalaunch_release.zip
        </a>{' '}
        folder and execute laika.exe. Or clone project from{' '}
        <a href="https://gitlab.labranet.jamk.fi/N3120/laika-launch">
          https://gitlab.labranet.jamk.fi/N3120/laika-launch
        </a>{' '}
        and execute /Laika-launch/bin/Release/Laika-launch.exe
      </>

      <>
        Note: Current version needs to be on 1920*1080 screen with 100% zoom
        settings to run correctly
      </>
    </>
  ),
  image: laika,
}
const portfolio = [post1, post2, post3]

const hobby1 = {
  title: 'Music',
  media: (
    <>
      <iframe
        title="illusionmajoris"
        style={{ border: 0, width: '100%', height: '42px' }}
        src="https://bandcamp.com/EmbeddedPlayer/track=743868546/size=small/bgcol=333333/linkcol=0f91ff/transparent=true/"
        seamless
      >
        <a href="https://illusionimajoris.bandcamp.com/track/king-ludd">
          King Ludd by Illusioni Majoris
        </a>
      </iframe>
    </>
  ),
  content: (
    <>
      Especially when i was younger my life revolved around music. I used to
      listen and play (and sing too) music almost all the time, soon i found
      myself studying sound engineering in vocational school at Orimattila where
      i graduated at 2005. Still, music is my passion, but nowadays mostly by
      listening to it.
      <br></br>
      The <em>Illusioni Majoris</em> was/is my main project. Since i adore
      instrumental/prog rock, it's just natural that i try and produce something
      like it myself too.
    </>
  ),
  image: null,
}

const hobby2 = {
  title: 'Bicycles',
  content: <>pyörtät</>,
  imageList: [
    {
      img: pinnacle,
      title: 'pinnacle',
    },
    {
      img: basso2,
      title: 'basso2',
    },
    {
      img: wheelbuilder,
      title: 'wheelbuilder',
    },

    {
      img: basso1,
      title: 'basso1',
    },
    {
      img: takaiskari,
      title: 'takaiskari',
    },
    {
      img: paintjob,
      title: 'paintojob',
    },
  ],
}

const hobbies = [hobby1, hobby2]

//Functions
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
                <Route
                  path="/portfolio"
                  element={<ContentElement content={portfolio} />}
                />
                <Route
                  path="/hobbies"
                  element={<ContentElement content={hobbies} />}
                />
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

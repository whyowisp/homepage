import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Container } from '@mui/system'

import Header from './components/Header'
import Hero from './components/Hero'
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
  title: 'The Man, the Myth and the Legend',
  subTitle: '...not really',
  image: cartography,
  imageText: 'Welcome message: Hello friend and welcome to my web pages',
}

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Portfolio', url: '/Portfolio' },
  { title: 'Hobbies', url: '/Hobbies' },
]

const contentHome = [
  {
    title: 'Who, me?',
    content: (
      <>
        <em>updated 31/08/2022</em>
        <p>
          My name is Mikko Sipola, student of Jamk University of Applied
          Sciences since 2019. I will be graduating in the end of 2023 from
          Bachelors Degree Programme in Information and Communications
          technology as an ICT Engineer.
        </p>
        <p>
          At the moment I'm specializing with Fullstack development in
          Javascript ecosystem with technologies including React/React Native,
          Redux and NodeJS/Express accompanied with Jest, Cypress, MongoDB,
          GraphQL, PostgreSQL, TypeScript and Docker.
        </p>
        <p>
          Right now I'm looking for internship opportunities in
          Jyväskylä-region, starting from february 2023, hopefully with
          technologies mentioned. I see programming with .NET environment as an
          fallback option, possibly in app development.
        </p>
        <p>
          In future I see myself as an some kind of expert position as a{' '}
          <em>doer</em>, programmer, developer, obtaining deep knowledge of my
          selected programming languages/technologies. For now, I'm committed to
          learn modern JS and a strong foundation around web development which
          I, and my future employer and co-workers could rely on. Farther in
          future I would learn Rust or some other performant language and
          contribute in producing some performance critical software; game
          engines, physics simulation for example, why not performant backend
          code too. Latter part of these possible futures I see little bit
          daydreaming, first part I see completely achievable.
        </p>
      </>
    ),
  },
]

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
      <p>
        Earlier version of this web page was implemented with plain html/css and
        while writing this, it's still{' '}
        <a href="https://student.labranet.jamk.fi/~N3120/mikonsivu/">
          available
        </a>
        .
      </p>{' '}
      <p>
        Page is responsive for both laptop and both tablets and phone screens,
        brakepoints at widths 600px and 800px. As design principle it's layout
        is for wider screens. Unfortunately menu items wont work/works poorly
        with smartphones so i recommend using mouse.
      </p>
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
      <p>
        This project was my first fullstack project with now (2022) little bit
        outdated technologies, though they say php will never die. Subject of
        this exercise was a Diary App for alpha males. It is a true fullstack
        project from MySQL database to backend implementation trought
        server-side rendering to web page design. On the other hand the Drawing
        Tab is implemented with vanilla JS, so there we have some client side
        rendering also.
      </p>

      <p>
        On the main page there is MotD (message of the day) - functionality
        where messages from the host is shown; 'Good day, hello sir', for
        example, and a clock.
      </p>

      <p>
        The database is handled with full CRUD functionality starting from user
        management to saving users diary data. User drawing are <em>not</em>{' '}
        saved anywhere.
      </p>

      <p>
        The login page as a whole is quoted from elsewhere, only for the purpose
        for satisfying my hunger of knowledge, not as a showcase.
      </p>
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
      <p>
        Laika Launch is a game where player launches Laika the Cosmonaut to the
        orbit and beyond, all the way till Mars. Laika will have to use
        assistance of gravitational pull from a black hole but be careful not to
        get sucked in. Also Laika could be launched too far and he would be lost
        forever in the vastness of space. Player can nudge his path little bit
        by assistance of his rocket engine. Player get's scores from successful
        landings and highscore will be saved until next playsession.
      </p>
      <p>
        The game was a part of UI exercise and for that reason it is implemented
        using WPF .NET framework (XAML/C#).
      </p>
      <p>
        To try this game please download and unzip{' '}
        <a href="https://student.labranet.jamk.fi/~N3120/mikonsivu/Laikalaunch_release.zip">
          https://student.labranet.jamk.fi/~N3120/mikonsivu/Laikalaunch_release.zip
        </a>{' '}
        folder and execute laika.exe. Or clone project from{' '}
        <a href="https://gitlab.labranet.jamk.fi/N3120/laika-launch">
          https://gitlab.labranet.jamk.fi/N3120/laika-launch
        </a>{' '}
        and execute /Laika-launch/bin/Release/Laika-launch.exe
      </p>

      <p>
        Note: Current version needs to be on 1920*1080 screen with 100% zoom
        settings to run correctly
      </p>
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
      <p>
        Especially when i was younger my life revolved around music. I used to
        listen and play (and sing too) music almost all the time, soon i found
        myself studying sound engineering in vocational school at Orimattila
        where i graduated at 2005. Still, music is my passion, but nowadays
        mostly by listening to it.
      </p>

      <p>
        The <em>Illusioni Majoris</em> was/is my main project. Since i adore
        instrumental/prog rock, it's just natural that i try and produce
        something like it myself too.
      </p>
    </>
  ),
  image: null,
}

const hobby2 = {
  title: 'Bicycles',
  content: (
    <>
      <p>
        I have always been on two wheels, since i asked my parents to take off
        the auxiliary wheels as a four year old. My family never could afford
        new bicycle but nevertheless i kept going out and adventures. Later my
        body developed allergies and asthma, and i never could'nt get in good
        shape so please don't ask me how much i have cycled this year. My miles
        are not mentionworthy.
      </p>

      <p>
        Instead i enhanced my skills as a mechanic and made it my craft for few
        years. Still, work isn't necessarily easy with my health (nor anyones
        health in Finland where bikes collect quite a lot of dirt and basically
        bike mechanics have to breathe that stuff in when they are cleaning
        bikes) and eventually i had to quit. <br></br>
        That red coloured steel frame Basso in the images have been my main
        apparatus since 2018. I take her out few times in a year. Most of the
        time i commute either with my electric bike or with another steel framed
        old mountainbike. <br></br>I have been dreaming to get back to the
        singletracks, like serious mountain biking, which i used to do when i
        was younger. I enjoy marathon/xc types of rides and bikes, but i also
        love to have pace, maybe i dould try some enduro/all mountain type of
        riding too.
        <br></br>Oh, i almost forgot to mention i did bikepacking from Vantaa,
        to Joensuu at my twenties. Loved that stuff too; you know, for me it's
        always cycling and bikes, bikes and cycling.
      </p>
    </>
  ),
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

const hobby3 = {
  title: 'Tabletop games/roleplaying games',
  content: (
    <>
      <p>
        <em>Catan</em> for tabletop games with friends/family.{' '}
        <em>Ars Magica</em> for deep roleplaying sessions. Seriously, look no
        further!
      </p>
    </>
  ),
}

const hobbies = [hobby1, hobby2, hobby3]

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
                <Route
                  path="/"
                  element={<ContentElement content={contentHome} />}
                />
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
      <Footer />
    </ThemeProvider>
  )
}

export default App

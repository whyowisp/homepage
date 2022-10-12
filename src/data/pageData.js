import { SvgIcon } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import cartography from '../images/seamap.png'
import facetime from '../images/facetime.jpg'
import oldpage from '../images/harj_screen.jpg'
import diaryapp from '../images/diary.png'
import laika from '../images/laika_preview.PNG'
import basso1 from '../images/basso.jpg'
import basso2 from '../images/basso_3.jpg'
import wheelbuilder from '../images/wheelbuilder.jpg'
import pinnacle from '../images/pinnacle_valmis.jpg'
import takaiskari from '../images/takaiskari_34bar.jpg'
import paintjob from '../images/monark_paintjob.jpg'
import kinesis from '../images/kinesis.jpg'

const BandCampIcon = (props) => {
  // Svg path: Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm48.2,326.1h-181L207.9,178h181Z" />
      </svg>
    </SvgIcon>
  )
}

const GitLabIcon = (props) => {
  // Svg path: Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M48 32H400C426.5 32 448 53.5 448 80V432C448 458.5 426.5 480 400 480H48C21.5 480 0 458.5 0 
      432V80C0 53.5 21.5 32 48 32zM382.1 224.9L337.5 108.5C336.6 106.2 334.9 104.2 332.9 102.9C331.3 101.9 
      329.5 101.3 327.7 101.1C325.9 100.9 324 101.2 322.3 101.8C320.6 102.5 319 103.5 317.8 104.9C316.6 106.3 
      315.7 107.9 315.2 109.7L285 201.9H162.1L132.9 109.7C132.4 107.9 131.4 106.3 130.2 104.9C128.1 103.6 127.4 
      102.5 125.7 101.9C123.1 101.2 122.1 100.1 120.3 101.1C118.5 101.3 116.7 101.9 115.1 102.9C113.1 104.2 
      111.5 106.2 110.6 108.5L65.94 224.9L65.47 226.1C59.05 242.9 58.26 261.3 63.22 278.6C68.18 295.9 78.62 311.1 
      92.97 321.9L93.14 322L93.52 322.3L161.4 373.2L215.6 414.1C217.1 415.1 220.9 416.9 223.9 416.9C226.9 416.9 
      229.9 415.1 232.3 414.1L286.4 373.2L354.8 322L355 321.9C369.4 311 379.8 295.8 384.8 278.6C389.7 261.3 
      388.1 242.9 382.5 226.1L382.1 224.9z"
        />
      </svg>
    </SvgIcon>
  )
}

export const heroData = {
  title: 'The Man, the Myth and the Legend',
  subTitle: '...not really',
  image: cartography,
  imageText: 'Welcome message: Hello friend and welcome to my web pages',
}

export const sections = [
  { title: 'Home' },
  { title: 'Portfolio' },
  { title: 'Hobbies' },
]

export const contentHome = [
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
    extendable. Source code at{' '}
    <a href="https://github.com/whyowisp/homepage">GitHub</a>
  </>
)

export const sideBar = {
  social: [
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      link: 'https://www.linkedin.com/in/mikko-sipola/',
    },
    { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/whyowisp' },
    {
      name: 'GitLab',
      icon: GitLabIcon,
      link: 'https://gitlab.labranet.jamk.fi/N3120',
    },
    {
      name: 'BandCamp',
      icon: BandCampIcon,
      link: 'https://illusionimajoris.bandcamp.com/',
    },
  ],
  cardData: {
    facetime: facetime,
    name: 'Mikko Sipola',
    title: 'Software engineer/fullstack developer',
    email: 'mikko.sipola@tutanota.com',
    cv: '/docs/cv.pdf',
  },
  about: about,
}

const post3 = {
  title: "Mikko's pages first version from 2019",
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
        outdated technologies, though they say Php will never die. Subject of
        this exercise was a Diary App for alpha males. It is a true fullstack
        project from MySQL database to backend implementation trough server-side
        rendering to web page design. On the other hand the Drawing Tab is
        implemented with vanilla JS, so there we have some client side rendering
        also.
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
const post1 = {
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
          https://student.labranet.jamk.fi
        </a>{' '}
        folder and execute laika.exe. Or clone project from{' '}
        <a href="https://gitlab.labranet.jamk.fi/N3120/laika-launch">
          https://gitlab.labranet.jamk.fi/
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

export const portfolio = [post1, post2, post3]

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
        Especially when I was younger my life revolved around music. I used to
        listen and play (and sing too) music almost all the time, soon I found
        myself studying sound engineering in vocational school at Orimattila
        where I graduated at 2005. Still, music is my passion, but nowadays
        mostly by listening to it.
      </p>

      <p>
        The <em>Illusioni Majoris</em> was/is my main project. Since I adore
        instrumental/prog rock, it's just natural that I try and produce
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
        I have always been on two wheels, since I asked my parents to take off
        the auxiliary wheels as a four year old. My family never could afford
        new bicycle but nevertheless I kept going out and adventures. Later my
        body developed allergies and asthma, and i never could'nt get in good
        shape so please don't ask me how much I have cycled this year. My miles
        are not mentionworthy.
      </p>

      <p>
        Instead I enhanced my skills as a mechanic and made it my craft for few
        years. Still, work isn't necessarily easy with my health (nor anyones
        health in Finland where bikes collect quite a lot of dirt and basically
        bike mechanics have to breathe that stuff in when they are cleaning
        bikes) and eventually I had to quit. <br></br>
        That red coloured steel frame Basso in the images have been my main
        apparatus since 2018. I take her out few times in a year. Most of the
        time I commute either with my electric bike or with another steel framed
        old mountainbike. <br></br>I have been dreaming to get back to the
        singletracks, like serious mountain biking, which I used to do when I
        was younger. I enjoy marathon/xc types of rides and bikes, but I also
        love to have pace, maybe I dould try some enduro/all mountain type of
        riding too.
        <br></br>Oh, I almost forgot to mention I did bikepacking from Vantaa,
        to Joensuu at my twenties. Loved that stuff too; you know, for me it's
        always cycling and bikes, bikes and cycling.
      </p>
    </>
  ),
  imageList: [
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
      title: 'paintjob',
    },
    {
      img: kinesis,
      title: 'kinesis',
    },
    {
      img: pinnacle,
      title: 'pinnacle',
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

export const hobbies = [hobby1, hobby2, hobby3]

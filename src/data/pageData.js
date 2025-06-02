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
import rpmt from '../images/rpmt.png'
import tokenofexchange from '../images/tokenofexchange.png'

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

//Removed
/*const GitLabIcon = (props) => {
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
}*/

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
        <em>updated 02/06/2025</em>
        <p>
          I’m a software engineer based in Central Finland with experience
          primarily in fullstack development, focusing on React, C#/.NET, and
          Azure. I enjoy thinking, designing, and building effective solutions
          for the problems at hand. For me, software development is about those
          “a-ha” moments — watching pieces come together step by step into a
          working feature or product.
        </p>
        <p>
          While I’m technical, I also deeply care about people and the
          environment. Software is not just a marvel of technology but a tool
          that helps people accomplish real goals. That’s why simplicity,
          usability, and responsible development practices are essential to me.
          I actively but responsibly utilize modern AI-assisted development
          tools 🤖 to improve my work.
        </p>
        <p>
          I’m known for my no-nonsense attitude, eagerness to learn, and ability
          to adapt quickly. Ready to join a team and contribute to new
          challenges with a fresh perspective.
        </p>
        {/*<p>
          Hello, I am a freshly graduated software engineer currently located in
          Central-Finland, most experience in full stack development but with
          interest in basically anything that involves process of thinking,
          designing and building best solution for the problem in hand. In
          software development I simply enjoy for the a-ha moments and seeing
          bits and pieces coming together one by one towards a fully working
          feature or a product.
        </p>
        <p>
          While I could be considered as technical person, the truth is that I
          care also about people (and environmental issues also). In my
          philosophy the product is not only a gadget of marvel, but it acts as
          a tool or interface for another human to accomplish something. This
          means that in every phase simplicity and usability must be taken in
          account. Not to a surprise, colleagues are humans also, so being
          friendly and respectful while staying humble are in my core values.
        </p>
        <p>
          What comes down to tech and programming languages in short, I am a
          React developer peppered with some C#/.NET knowledge and who
          understands something about databases. Node.JS I can do too.
        </p>
        <p>
          On my free time I find myself usually spending time with my family or
          doing chores. All kind of games are on my list of interest and
          actually I oversee <em>a tabletop roleplaying related web-app</em>{' '}
          which I have created (with React/Node.JS/MongoDB). Occasionally I
          might write an adventure and be a game master for my friends. As it is
          in fashion nowadays, i also hit to the gym when in need for self care.
        </p>
        <p>
          And what might future hold for me? So far i have only scratched the
          surface of the industry. Now I am able to create a web-service from
          scratch, but for the scratch there is always an itch. And for me the
          itch is probably the lower level code with some modern and performant
          programming language (Just say it Mikko, it's <em>Rust</em>) and the
          wonders that could be done with it. Could it be games or simulations,
          maybe embedded? I cannot know. Another interesting path could be
          studying a little bit more to become as an IoT systems specialized SW
          architect.
        </p>*/}
      </>
    ),
  },
  {
    title: 'The shabby Commodore 64',
    content: (
      <>
        <p>
          Yes, I’m a millennial who grew up without mobile phones or the
          internet — something I actually appreciate and could get quite
          nostalgic about. But today, my nostalgia is reserved for one special
          thing: the used Commodore 64 my father brought home for me when I was
          around eight years old.
        </p>
        <p>
          Inside that cardboard box was a fascinating machine, accompanied by a
          couple of programming books on BASIC and a few game cassettes. I
          didn’t immediately dive into coding — I played games too — but those
          books quickly caught my attention with their intriguing content.
        </p>
        <b>
          10 FOR I = 1 TO 5 <br></br>
          20 PRINT "HELLO, WORLD!"<br></br>
          30 NEXT I<br></br>
          40 END<br></br>
        </b>
        <p>
          And there were longer programs too, sometimes hundreds of lines long.
          Naturally, I tried to type these programs exactly as they were, but my
          understanding was limited and Finnish was my only language at the
          time. So, unsurprisingly, those projects didn't quite work out.
          Instead, I started writing my own shorter programs, experimenting with
          PRINT statements, FOR loops, and GOTO commands.
        </p>
        <p>
          This early experience planted the seed for my enduring interest in
          computer science.
        </p>
      </>
    ),
  },
]

const about = (
  <>
    This web page is created using React with Google's material-UI. Project runs
    at Fly.io server. No gimmicks here, just a plain simple web page focus on
    telling something about person in question, his achievements and interests.
    All packaged in nice wrappings and focus of it's contents to be easily
    extendable. Source code at
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

const post6 = {
  title: 'Work experience',
  date: '16.02.2024',
  content: (
    <>
      <p>
        On my current employer as a software developer i have worked with few
        projects:
      </p>
      <b>A Facility energy consumption tracking service</b>
      <p>
        New feature development and bug fixing in a production-app. This role
        consisted of front-end design and visualizations with Figma and
        development with React/React-admin and Highcharts. Database changes for
        the new features were updated in Azure SQL database and corresponding
        backend code was implemented with C#/ASP.NET.
      </p>
      <b>An IoT fleet management service for property management machines</b>
      <p>
        Front-end development with React, TypeScript and NextJS accompanied with
        Material UI and Chart.js JavaScript libraries in an agile environment
        with a small development team.
      </p>
    </>
  ),
}
const post5 = {
  title: 'Token of Exchange',
  date: '02/06/2025',
  git: 'https://github.com/whyowisp/token-of-exchange',
  image: tokenofexchange,
  content: (
    <>
      <p>
        Token of Exchange is an ongoing passion project built around a simple
        thought experiment: What if an isolated island community, once based
        solely on barter, was suddenly forced to adopt money? The simulation
        explores how different systems of money creation, governance, and
        taxation shape the economy over time. Through interactive control, the
        user can observe the unfolding changes — from individual trades between
        residents to broader economic indicators like GDP, resource sufficiency,
        economic growth, and overall well-being.
      </p>
    </>
  ),
}
const post4 = {
  /*
  <p>
        My ongoing fullstack project consisting MongoDB database, server written
        with NodeJS and front with ReactJS. At the time of writing this is now
        in early early beta and has been tested couple times with and players
        have liked it and this is seen worth of further development. Definitely
        a hobby project for now. Please visit{' '}
        <a href="https://rpmtool.fly.dev/">https://rpmtool.fly.dev</a> to test
        and feel.
      </p>*/
  title: 'Roleplay Campaign Canagement Tool',
  date: '21.11.2022',
  git: 'https://github.com/whyowisp/RP-management',
  content: (
    <>
      <p>
        A fullstack project consisting MongoDB database, server written with
        NodeJS and front with ReactJS. At the time of writing this is now in
        early early beta and has been tested couple times with and players have
        liked it and this is seen worth of further development.
      </p>
    </>
  ),
  image: rpmt,
}

const post3 = {
  title: "Mikko's pages first version from 2019",
  date: '29.05.2019',
  content: (
    <>
      <p>
        Earlier version of this web page was implemented with plain html/css.
      </p>
      <p>
        Page is responsive for both laptop and both tablets and phone screens,
        breakpoints at widths 600px and 800px. As design principle it's layout
        is for wider screens. Unfortunately menu items wont work/works poorly
        with smartphones so i recommend using mouse.
      </p>
    </>
  ),
  image: oldpage,
}
const post2 = {
  title: 'Diary App with MySQL/php/vanilla js',
  date: '30.11.2020',
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
        To try this game please clone project from{' '}
        <a href="https://github.com/whyowisp/laika-launch">
          https://github.com/whyowisp/laika-launch/
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

export const portfolio = [post6, post5, post4, post1, post2, post3]

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

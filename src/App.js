import { useState } from 'react'
import { createTheme, ThemeProvider, Grid, CssBaseline } from '@mui/material'
import { Container } from '@mui/system'

import Header from './components/Header'
import Hero from './components/Hero'
import SideBar from './components/SideBar'
import ContentElement from './components/ContentElement'
import Footer from './components/Footer'

import {
  contentHome,
  portfolio,
  hobbies,
  sections,
  heroData,
  sideBar,
} from './data/pageData'

const myTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#9EADA5',
    },
    secondary: {
      main: '#4E6156',
    },
    text: {
      primary: '#614745',
    },
    background: {
      default: '#614745',
      paper: '#AD9F9E',
    },
  },
  shape: {
    borderRadius: 3,
  },
})
//Mui basic theme, no modifications
//const theme = createTheme()

const App = () => {
  const [content, setContent] = useState(contentHome)

  const handleClick = (e) => {
    e.preventDefault()

    const id = e.target.id

    if (id === 'Home') setContent(contentHome)
    if (id === 'Portfolio') setContent(portfolio)
    if (id === 'Hobbies') setContent(hobbies)
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Container maxWidth="lg">
        <Header
          title="Mikko´s pages"
          sections={sections}
          handleClick={handleClick}
        />
        <main>
          <Hero heroData={heroData} />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <ContentElement content={content}></ContentElement>
            <SideBar sideBar={sideBar} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App

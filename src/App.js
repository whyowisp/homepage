import { useState } from 'react'
import { createTheme, ThemeProvider, Grid } from '@mui/material'
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

//Might add theme someday
const theme = createTheme()

const App = () => {
  const [content, setContent] = useState(contentHome)

  const handleClick = (e) => {
    e.preventDefault()

    if (e.target.id === 'Home') setContent(contentHome)
    if (e.target.id === 'Portfolio') setContent(portfolio)
    if (e.target.id === 'Hobbies') setContent(hobbies)
  }

  return (
    <ThemeProvider theme={theme}>
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

import { Typography, Toolbar, Box, Button, ButtonGroup } from '@mui/material'

const Header = ({ sections, title, handleClick }) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h3"
          variant="h5"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          {sections.map((section) => (
            <Button
              key={section.title}
              id={section.title}
              onClick={(event) => handleClick(event)}
              sx={{ pl: 4, pr: 4 }}
            >
              {section.title}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  )
}

export default Header

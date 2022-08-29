import { Typography, Toolbar, Link, Divider } from '@mui/material'

const Header = ({ sections, title }) => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
        }}
      >
        {sections.map((section) => (
          <Link
            noWrap
            key={section.title}
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
            <Divider />
          </Link>
        ))}
      </Toolbar>
    </>
  )
}

export default Header

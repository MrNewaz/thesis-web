import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ bgcolor: '#2196F3 !important' }}>
        <Toolbar>
          <Typography
            variant='h5'
            align='center'
            sx={{ flexGrow: 1, color: '#fff' }}
          >
            Thesis
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

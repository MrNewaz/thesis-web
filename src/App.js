import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue, amber } from '@mui/material/colors'
import { CssBaseline } from '@mui/material'
import AppRoutes from 'Routes'
import ScrollToTop from 'utils/ScrollToTop'
import Navbar from 'components/Navbar'

const App = ({ darkmode = false }) => {
  const theme = createTheme({
    palette: {
      mode: darkmode ? 'dark' : 'light',
      primary: blue,
      secondary: amber,
      // text: {
      //   primary: '#888',
      //   secondary: '#DDDDDD',
      // },
      // background: {
      //   default: '#1d1b19',
      //   paper: '#181715',
      // },
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      button: {
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollToTop />
      <Navbar />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

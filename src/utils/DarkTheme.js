import { createTheme, ThemeProvider } from '@mui/material/styles'

const TextTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#b29063',
      },
    },
    typography: {
      fontFamily: 'Marcellus',
      // fontWeightLight: 400,
      // fontWeightRegular: 500,
      // fontWeightMedium: 600,
      // fontWeightBold: 700,
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default TextTheme

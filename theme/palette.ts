import { colors } from '@material-ui/core'

const white = '#FFFFFF'

export default {
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.blue[900],
    light: colors.blue[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.lightBlue[900],
    main: colors.lightBlue[500],
    light: colors.lightBlue.A100,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.lightBlue[500],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F5F5F5',
    paper: white,
  },
  divider: colors.grey[200],
}

import { CssBaseline } from '@material-ui/core';
import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles'
import Header from './components/Header'
import PlaceToVisit from './components/PlaceToVisit'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/island2.jpg"})`,
    backgroundRepeat:'no-repeat',
    backgroundSize: 'cover'
  }
}))

function App() {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
  );
}

export default App;

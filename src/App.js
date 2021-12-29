
import './App.css';
import { Grid } from '@mui/material';
import SpaceCards from './components/SpaceCards';
import FavText from './components/FavText';

function App() {
  return (
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={12} md={4} lg={5} maxWidth>
        <FavText/>
      </Grid>
      <Grid item xs={12} md={8} lg={7}>
      
        <SpaceCards/>
      </Grid>

    </Grid>
   
  );
}

export default App;

import './App.css';
import DropDown from "./dropdown"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Task
          </Typography>
        </Toolbar>
      </AppBar>
      <DropDown/>
    </div>
  );
}

export default App;

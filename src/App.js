import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Home from './components/Home';
import { Switch } from '@mui/material';
import OtpComponent from './OtpComponent';

function App() {
 
  
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/OtpComponent">
            <OtpComponent/>
          </Route>
        </Switch>
      </BrowserRouter>
    // </div>
  );

}

export default App;

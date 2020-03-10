import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Ingredientes from './pages/Ingredientes/Ingredientes';
import './App.css';

class App extends React.Component {
  render() {
    return(                  
      <BrowserRouter>
        <Nav/>        
        <div className='corpo'>          
          <Switch>
            <Route path='/home'>              
              <Home/>
            </Route>
            <Route path='/ingredientes'>
              <Ingredientes/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Ingredientes from './pages/Ingredientes/Ingredientes';
import CarouselRoll from './components/CarouselRoll/CarouselRoll';

import street from './assets/street.jpg';
import dog from './assets/sleepyDog.jpg';
import desert from './assets/desertScenario.jpg';
import livingRoom from './assets/prettyLivingRoom.jpg';

import './App.css';
import CarouselItem from './components/CarouselRoll/CarouselItem';

class App extends React.Component {
  render() {
    return(                  
      <BrowserRouter>
        <Nav/>                
        <div className='corpo-app'>
          <CarouselRoll>
            <CarouselItem backgroundImage={street}/>
            <CarouselItem backgroundImage={dog}/>
            <CarouselItem backgroundImage={desert}/>
            <CarouselItem backgroundImage={livingRoom}/>
          </CarouselRoll>
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

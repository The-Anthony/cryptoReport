//Componenti
import Homepage from './components/homepage/homepage';
import Footer from './components/footer/footer';
import DataPage from './components/dataPage/dataPage';
import PageNotFound from './components/error/pageNotFound';
import RequestError from './components/error/requestError';
import TooManyRequests from './components/error/tooManyRequests';
import Guide from './components/guide/guide';

import './App.css';

//Componenti necessari per React Router
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/data' component={DataPage}/>
          <Route exact path='/error' component={RequestError}/>
          <Route exact path='/toomanyrequests' component={TooManyRequests}/>
          <Route exact path='/cryptoguide' component={Guide}/>
          <Route path='/:page' component={PageNotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

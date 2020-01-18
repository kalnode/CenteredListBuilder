import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './assets/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import routeAbout from './views/About';
import routeTool from './views/Tool';


// App is structred as a functional component (as opposed to a class), which enables use of React Hooks
const App = () => {

 
  return (
    <div className="App">

      <header>
        <Header />
      </header>
    
      <main>

      
      <Route path="/about" exact component={routeAbout}/>
      <Route path="/tool" component={routeTool}/>
      <Redirect exact from="/" to="/about" />

      </main>

      <footer>
        <Footer />
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default App;

import React from 'react';
import './assets/App.css';
import Header from './components/Header';
import ListInput from './components/ListInput';
import ListStyler from './components/ListStyler';
import ListOutput from './components/ListOutput';
import Footer from './components/Footer';
import { connect } from 'react-redux';

function App({listOutput}) {
  
 //var dataListOutput = "ggg";

  return (
    <div className="App">
      <header className="App-header">
        <Header Title="Centered-list Styler" />
      </header>

      <main>

        <div id="appInput">
          <h2>1</h2>
          <div>
            <div className="title">Paste or type your list here</div>
            <ListInput />
          </div>
          <div className="list"><ListOutput List={listOutput} /></div>
        </div>


        <div id="appStyler">
          <h2>2</h2>
          <div>
            <div className="title">Choose styles</div>
            <ListStyler />        
          </div>
          <div>

          </div>
        </div>


        <div id="appResult">
          <h2>3</h2>
          <div>
            <div className="title">Copy result</div>
            <ListOutput List={listOutput} Code="true" />
          </div>
          <div className="list">
            <ListOutput List={listOutput} />
          </div>
        </div>


      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}


const mapStateToProps = state => {
  return { listOutput: state.listOutput }
}

export default connect(mapStateToProps)(App);

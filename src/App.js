import React from 'react';
import './assets/App.css';
import Header from './components/Header';
import ListStyler from './components/ListStyler';
import ListOutput from './components/ListOutput';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

// Making use of Redux's React Hooks
import { useDispatch, useSelector } from "react-redux";


// App is structred as a functional component (as opposed to a class), which enables use of React Hooks
const App = () => {

  // Associate variables with Redux store variables
  const listOutput = useSelector(state => state.listOutput);

  // Initiate Redux dispatch, in order to pass data back into store
  const dispatch = useDispatch();

  function changeList(e) {
    // Pass data into a particular store reducer action
    dispatch({ type: 'OUTPUT_LIST', payload: e })   
  }



  return (
    <div className="App">
      <header>
        <Header />
      </header>
      
      <section id="intro">
       

        <div className="inner">
          <div className="controls">
            <div>CONTAINER WIDTH: </div>
            <div>
              <button id="list_button1">300px</button>
              <button id="list_button2" className="selected">500px</button>
              <button id="list_button3">800px</button>
            </div>
          </div>


          <div id="intro-list" className="centered-list">
          <ul>
                <li><span>Elephant</span></li>
                <li><span>Dog</span></li>
                <li><span>Cat</span></li>
                <li><span>Rhinocerous</span></li>
                <li><span>Horse</span></li>
                <li><span>Parrot</span></li>
                <li><span>Crocodile</span></li>
                <li><span>Tyrannosaurus Rex</span></li>
                <li><span>Bear</span></li>
                <li><span>Giraffe</span></li>
                <li><span>Wolf</span></li>
                <li><span>Dolphin</span></li>
            </ul>
          </div>
        </div>

        <h3>This special kind of list requires some code tricks!</h3>

      </section>



      <Tabs>
      <div label="Gator">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Croc">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Tabs>



      <main>

      <section id="content">
          <h3>Summary</h3>
          <p>This is an uncommon list style, and typically text editors don't provide such a feature.</p>

          <h3>List Features</h3>
          <ul>
            <li>Centered and bulleted</li>
            <li>Evenly (or nicely) spaced items</li>
            <li>Responsive and dynamic</li>
            <li>Uses plain HTML structure</li>
            <li>... and has no bullet appearing on the start or end of a line.</li>
          </ul>

          <h3>Inspiration</h3>
          <p>MUSIC FESTIVAL POSTERS! They feature long, dense band lists (the "line up") where seperators never occur on the edges of the list. This is easy to pull off in fixed printed designs. The same can't be said for dynamic media (like a webpage), so on festival websites the classic "line up" style is often a static image.</p>

          <p><a href="https://www.google.ca/search?hl=en&tbm=isch&sxsrf=ACYBGNR-G6eP0lhSIWqGLk0TQdX-o4W7DQ%3A1579123351670&source=hp&biw=1920&bih=965&ei=l4IfXrjKJs7ctAbWwLGgBw&q=music+festival+posters&oq=music+festival+posters&gs_l=img.3..0l3j0i5i30l7.1662.5013..5104...0.0..0.241.2266.17j4j2......0....1..gws-wiz-img.....10..35i362i39j35i39j0i131.tYLOaRhGNJc&ved=0ahUKEwj48bjzxIbnAhVOLs0KHVZgDHQQ4dUDCAU&uact=5">
            Google Image Search for "Music Festival Posters"
          </a></p>
        
          <h3>How</h3>
          <p>With custom CSS code, this visual effect can be achieved on an HTML list!</p>

          <p><a href="">Create your own</a> or read about <a href="">how it works</a></p>
      </section>

        <section id="appInput">
          <h2>1</h2>
          <div>
            <div className="title">Paste or type your list here. Longer the better.</div>
            <textarea placeholder="Item 1&#13;&#10;Item 2&#10;Item 3&#10;Item 4&#10;Item 5" wrap="off" onChange={e => changeList(e.target.value)} />
          </div>

          <div className="list"><ListOutput List={listOutput} /></div>
        </section>

        <section id="appStyler">
          <h2>2</h2>
          <div>
            <div className="title">Choose styles</div>
            <ListStyler />        
          </div>
          <div>

          </div>
        </section>


        <section id="appResult">
          <h2>3</h2>
          <div>
            <div className="title">Copy result</div>
            <ListOutput List={listOutput} Code="true" />
          </div>
          <div className="list">
            <ListOutput List={listOutput} />
          </div>
        </section>


      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom';
import './assets/App.css';
import Header from './components/Header';
import ListStyler from './components/ListStyler';
import ListOutput from './components/ListOutput';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

import routeAbout from './views/about';
import routeTool from '.views/tool';

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

      <Route path="/about" exact component={routeAbout}/>
      <Route path="/tool" component={routeTool}/>

      <li><Link to="/about">About</Link></li>
      <li><Link to="/tool">Tool</Link></li>

      <main>
        <Tabs>
          <div label="About">
            <div id="about">
            
            <section id="intro">
            
              <h2>A helper to achieve a list style like below:</h2>

              <div className="controls">
                  <div className="title">Container Width: </div>
                  <div>
                    <button id="intro_button1">300px</button>
                    <button id="intro_button2" className="selected">500px</button>
                    <button id="intro_button3">800px</button>
                  </div>
                </div>
              <div className="inner">                

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

              <h3 style={{paddingBottom: "2em"}}>This special kind of list requires some code tricks!</h3>

            </section>


            <section className="content">
              <h3>Description</h3>
              <p>This is an uncommon list style, and typically text editors don't provide such a feature.</p>
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
              <p>There's a few solutions involving CSS-only and/or JS!</p>

              <p><a href="">Create your own and find out about the code</a></p>
            </section>
          </div>
          </div>

          <div label="Make a List">
            <div id="tool">
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
            </div>
          </div>
        </Tabs>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

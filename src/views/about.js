import React from "react";
import { NavLink } from 'react-router-dom';
//import Button from '../components/Button';
import ContainerControl from '../components/ContainerControl';

function About() {

  return (
    <div id="about" className="inner">
            
            <section id="intro">
            
              <h2>A helper to achieve a list style like below:</h2>

              <ContainerControl>
                <div id="intro-list" className="centered-list centered-list0">
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
              </ContainerControl>

              <h3 style={{paddingBottom: "2em"}}>This list requires some code tricks!</h3>

            </section>


            <section className="content">
              <h3>List Description</h3>
              <p>This is an uncommon list style, and typically not a feature in text editors (web or otherwise).</p>
              <ul>
                <li>Centered and bulleted</li>
                <li>Evenly (or nicely) spaced items</li>
                <li>Responsive and dynamic</li>
                <li>Uses plain HTML structure</li>
                <li>Ideally CSS-only</li>
                <li>... and <u><i>has no bullet appearing on the start or end of a line.</i></u></li>
              </ul>

              <h3>Inspiration: MUSIC FESTIVAL POSTERS!</h3>
              <p>Festival posters often feature long, dense band lists (the "line up") where seperators don't occur on the edges of the list. This list style is easy to pull off in fixed printed designs. The same can't be said for dynamic media (like a webpage), so on festival websites the classic "line up" style is often a static image --- the same as the printed design.</p>

              <p><a href="https://www.google.ca/search?hl=en&tbm=isch&sxsrf=ACYBGNR-G6eP0lhSIWqGLk0TQdX-o4W7DQ%3A1579123351670&source=hp&biw=1920&bih=965&ei=l4IfXrjKJs7ctAbWwLGgBw&q=music+festival+posters&oq=music+festival+posters&gs_l=img.3..0l3j0i5i30l7.1662.5013..5104...0.0..0.241.2266.17j4j2......0....1..gws-wiz-img.....10..35i362i39j35i39j0i131.tYLOaRhGNJc&ved=0ahUKEwj48bjzxIbnAhVOLs0KHVZgDHQQ4dUDCAU&uact=5">
                Google Image Search for "Music Festival Posters"
              </a></p>
            
              <h3>How</h3>
              <p>There's a few solutions involving CSS-only and/or JS!</p>

              <div className="cta">
                <h3>Make a centered list...</h3>
                <NavLink className="buttonCTA" activeClassName='is-active' to='/tool'>Start here</NavLink>
              </div>
            </section>
          </div>
    
  );
}

export default About;
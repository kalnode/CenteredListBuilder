import React from 'react';
import Tabs from '../components/Tabs';
import ListStyler from '../components/ListStyler';
import ListOutput from '../components/ListOutput';
import { useDispatch, useSelector } from "react-redux";




 const Tool = () => {


 // Associate variables with Redux store variables
 const listOutput = useSelector(state => state.listOutput);
 const listPlaceholder = useSelector(state => state.listPlaceholder);

 // Initiate Redux dispatch, in order to pass data back into store
 const dispatch = useDispatch();

 function changeList(e) {
   // Pass data into a particular store reducer action
   dispatch({ type: 'OUTPUT_LIST', payload: e })   
 }





  return (
    <div id="tool" class="inner">
        
    <section id="appInput">
      <h2 className="number">1</h2>
      <div>
        <div className="instruction">Paste or type your list here. Longer the better.</div>
        <textarea placeholder={listPlaceholder} wrap="off" onChange={e => changeList(e.target.value)} />
      </div>

  {/*<div className="list"><ListOutput List={listOutput} /></div>*/}
    </section>


    <section id="appStyler">
      <h2 className="number">2</h2>
      <div>
        <div className="instruction">Choose solution and styles</div>
     
        
        <Tabs>
              <div label="1">
                <h2><span className="titlePre">Technique</span> #1</h2>
                <p>CSS-only: Using inline-block and background image (base64 svg)</p>

                <h2>Choose seperator style:</h2>
                <ListStyler />

              </div>

              <div label="2">
                <h2><span className="titlePre">Technique</span> #2</h2>
                <p>CSS-only: Using flexbox and margin offset</p>

                <h2>Choose seperator style:</h2>
                <ListStyler />
        
              </div>

              <div label="3">
                <h2><span className="titlePre">Technique</span> #3</h2>
                <p><span>Javascript</span>: Detecting start of lines and disabling list bullet for specific items</p>

                <h2>Choose seperator style:</h2>
                <ListStyler />
        
              </div>

          </Tabs>

      </div>
    </section>





    <section id="appResult">
      <h2 className="number">3</h2>
      <div>
        <div>
          <div className="instruction">Preview & Copy Result</div>
          
        </div>
        <div className="inner" style={{display:"flex",flexWrap:"wrap"}}>
      
          <div className="centered-list">
             <div className="title">Preview</div>
            <ListOutput List={listOutput ? listOutput : listPlaceholder} />
          </div>

          <div>
            <div className="title">Code</div>
            <ListOutput List={listOutput ? listOutput : listPlaceholder} Code="true" />
          </div>
      
        </div>

      </div>

    </section>
    
    </div>



    
  );
}

export default Tool;
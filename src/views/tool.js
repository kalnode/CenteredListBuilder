import React from 'react';
import ListStyler from '../components/ListStyler';
import ListOutput from '../components/ListOutput';
import ReadMore from '../components/ReadMore';
import ContainerControl from '../components/ContainerControl';
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Tool = () => {

    // Redux store variables
    const listOutput = useSelector(state => state.listOutput);
    const listPlaceholder = useSelector(state => state.listPlaceholder);
    const listTechnique = useSelector(state => state.listTechnique);

    // For sending data back into Redux store
    const dispatch = useDispatch();

    function changeList(e) {
        dispatch({ type: 'OUTPUT_LIST', payload: e })   
    }

    function setTechnique(e) {
        dispatch({ type: 'SET_TECHNIQUE', payload: e })   
    }


    return (
        <div id="tool" className="inner">

            <section id="appInput">
                <h2 className="number">1</h2>
                <div>
                    <div className="instruction">Paste or type your list here:</div>
                    <textarea placeholder={listOutput ? listOutput : listPlaceholder} wrap="off" onChange={e => changeList(e.target.value)} />
                </div>

                {/*<div className="list"><ListOutput List={listOutput} /></div>*/}
            </section>

            <section id="appStyler">
                <h2 className="number">2</h2>
                <div>
                    <div className="instruction">Choose bullet style:</div>

                    <div className="styler">
                        <ListStyler ListStyle={listTechnique} />
                    </div>
                </div>
            </section>

            <section id="appResult">
                <h2 className="number">3</h2>
                <div>
                    <div>
                        <div className="instruction">Choose technique:</div>
                    </div>
                    <div className="inner">

                    <Tabs defaultIndex={listTechnique} onSelect={index => setTechnique(index)} className="selectTechnique">
                        <TabList>
                            <Tab><h3>A</h3></Tab>
                            <Tab><h3>B</h3></Tab>
                            <Tab><h3>C</h3></Tab>
                        </TabList>

                        <TabPanel>
                        
                        <div className="title"><h2>Technique A</h2><h4>CSS-only, using white-space trimming trick</h4></div>

                        <ReadMore>
                            <p>This technique is based on how HTML-compliant web browsers handle extraneous spaces (white space). Content of an ::after pseudo element, that occurs on the last inline element (end of line), will get automatically trimmed by browsers if the content is set to a plain white space (content: " "). This browser characteristic is <a href="https://stackoverflow.com/a/40963855/4378314">described here</a>.</p>

                            <p>Leveraging this quirk, we can now have some measure of control over one edge of our list (the entire right side).</p>

                            Notes:
                            <ul>
                                <li>Standard list bullets are disabled (list-style: none)</li>
                                <li>List items set to display: inline</li>
                                <li>List items each have an ::after pseudo element where we visually render a bullet via a background image</li>
                                <li>Each ::after pseudo element has a content: " " applied, which, for the last list item in every line, gets automatically trimmed by the browser</li>
                            </ul>
                        
                            <p>Since the white-space trimming action of browsers is based on HTML standards, we can reliably count on this list styling technique.</p>

                            <p>As well, spacing between the list items can be controlled with letter-spacing, which affects the content: " ". Using padding isn't suitable, as padding still seems to apply to pseudo after elements at the ends of lines.</p>
                        </ReadMore>

                            
                        </TabPanel>

                        <TabPanel>
                        <div className="title"><h2>Technique B</h2><h4>CSS-only, flexbox and negative margin</h4></div>
                            <ReadMore>
                                <p>This technique is based on flexbox's grow attribute, which extends our list items to both left and right edges of the container. This results in the left-side of our list having a nice vertical stack of bullets which we can then hide with a negative margin on the parent container.</p>

                                <p>Pro: Regular list bullets are still used.</p>
                                <p>Con: You can't control item spacing as easily as technique A.</p>

                                Notes:
                                <ul>
                                    <li>The list is set to display: flex</li>
                                    <li>List items are set to flex: 1, which means each list line gets filled</li>
                                    <li>The parent container has a negative left margin, enough to hide the left-side bullets of the list</li>
                                </ul>
                            </ReadMore>
                        </TabPanel>

                        <TabPanel>
                        <div className="title"><h2>Technique C</h2><h4>Javascript</h4></div>

                            <ReadMore>
                            <p>This technique involves using Javascript to scan a list and disabling the first list bullet that occurs on a line break.</p>

                            <p>The advantage here is you get full styling control over the list, not being limited by some CSS trick, and remove any worry about CSS compatibility.</p>

                            <p>This disadvantage is performance. First, this is yet another script to load and run, so naturally it is slower than a CSS-only method. Second, the size of your list, size of your page and/or any other heavy processes will have an affect on performance. Users may see moments where the list appears without full styling and then abruptly changes to new styling.</p>
                            </ReadMore>
                        </TabPanel>

                    </Tabs>

                
                    <div>
                        <div className="title">Preview</div>
                            <ContainerControl>
                                <ListOutput List={listOutput ? listOutput : listPlaceholder} />
                            </ContainerControl>
                        </div>

                        <div>
                            <div className="title">Code</div>
                            <ListOutput List={listOutput ? listOutput : listPlaceholder} Code="true" />
                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default Tool
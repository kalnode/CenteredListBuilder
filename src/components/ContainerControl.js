import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function ContainerControl(props) {

    const [containerWidth, setWidth] = useState(2);
    var [containerParent, setContainer1] = useState(null);  
    var [containerInner, setContainer2] = useState(null); 

 function setHeight() {

    console.log("Setting new height ");
containerParent.height = containerInner.clientHeight + 200 + "px";

  }
 
    return (

            <div className="containerControl" onClick={() => setHeight()} ref={ (divElement) => { setContainer1(divElement) } }>
                <div className="controls">
                    <Tabs defaultIndex={2} onSelect={index => setWidth(index)}>
                        <TabList>
                            <Tab>200px</Tab>
                            <Tab>300px</Tab>
                            <Tab>500px</Tab>
                            <Tab>800px</Tab>
                            <Tab>Animate</Tab>
                        </TabList>

                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </Tabs>
     
                </div>
                <div className={`inner width` + containerWidth} ref={ (divElement) => { setContainer2(divElement) } }>   
                    {props.children}
                </div>                
            </div>

    );
}



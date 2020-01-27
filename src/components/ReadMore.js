import React, {useState} from "react";
import Button from '../components/Button';

export default function ReadMore(props) {

    const [readExpanded, setExpanded] = useState(0);
          
    return (
        <div className={["readMore", readExpanded === 1 ? "readOpen" : "readClosed"].join(' ')}>
            <div>{props.children}</div>
            <Button onToggle={() => setExpanded(readExpanded === 1 ? 0 : 1) }>{readExpanded === 1 ? "Read Less" : "Read More" }</Button>  
        </div>                
    );
}
import React, {useState} from 'react';

function ToggleBtn(props) {
    // const activeCls = (props.isActive) ? ' is-active' : '';
    const [activeCls, setActive] = useState(null);

    function runFuncs() {
        if (props.onToggle) { props.onToggle(); }
        setActive(activeCls ? null : 'is-active');
    }
    
    return (
        <button id={props.id} className={activeCls} onClick={ () => runFuncs()}>{props.children}</button>
    );
}

export default ToggleBtn;
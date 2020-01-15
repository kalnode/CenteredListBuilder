// May not be needed anymore.
// Keeping for reference.

import React, { useState } from 'react';

export default function ListInput(props) {

  var variableAttribute = "";
 
  if (props.List) {
    variableAttribute = { value: props.List };  
  }


  function textAreaUpdate() {
    //console.log(listInput);
  }

  return (
    <><textarea placeholder="Item 1&#13;&#10;Item 2&#10;Item 3&#10;Item 4&#10;Item 5" wrap="off" {...variableAttribute}></textarea></>
  );
}
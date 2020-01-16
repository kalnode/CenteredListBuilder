import React from 'react';

export default function ListOutput(props) {

  // Check if prop "Code" exists, display raw code, else display styled HTML


  // For outputting visible HTML code in the browser (inside <pre><code>)
 
  var RenderedListRAWHTML = "<ul>\n" + props.List
  .split('\n')
  .filter(line => line.trim() !== '')
   // Getting object as string literal (via backticks), and including \n and \t for nice formatting
  .map(line => `\t<li>${line}</li>\n`).join('') + '</ul>';

  // For outputting regular styled list
  var RenderedList = props.List
  .split('\n')
  .filter(n => n)
  .map((name, index) => (
    <li key={index}>
      {name}
    </li>
  ));

    // Check if the instance is for "code" view (raw html in browser)
    if (props.Code) {
        return (
          <><pre><code>{RenderedListRAWHTML}</code></pre></>        
        );
    } else {
      return (
        <><ul>{RenderedList}</ul></>
      );
    }
}
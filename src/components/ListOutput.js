import React from 'react';

export default function ListOutput(props) {

  // Check if prop "Code" exists, display raw code, else display styled HTML

  var RenderedListRAWHTML = "<ul>\n" + props.List
  .split('\n')
  .filter(line => line.trim() !== '')
  .map(line => `\t<li>${line}</li>\n`).join('') + "</ul>";

  var RenderedList = props.List
  .split('\n')
  .filter(n => n)
  .map((name, index) => (
    <li key={index}>
      {name}
    </li>
  ));

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
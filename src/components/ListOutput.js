import React from 'react';
import { useSelector } from "react-redux";

export default function ListOutput(props) {

  const listTechnique = useSelector(state => state.listTechnique);
  const listStyles = useSelector(state => state.listStyles);
  const listStyle = useSelector(state => state.listStyle);

  var RenderedListRAWCode = "";
  
   // For outputting regular styled list
   var RenderedList = props.List
   .split('\n')
   .filter(n => n)
   .map((name, index) => (
     <li key={index}>
       <span>
         {name}
       </span>
     </li>
   ));


    if (listTechnique === 0 ) {
        // For outputting visible HTML code in the browser (inside <pre><code>) 
      RenderedListRAWCode = '<!-- HTML code -->\n\n<div class="centered-list">\n\t<ul>\n' + props.List
      .split('\n')
      .filter(line => line.trim() !== '')
      // Getting object as string literal (via backticks), and including \n and \t for nice formatting
      .map(line => `\t\t<li><span>${line}</span></li>\n`).join('') + '\t</ul>\n</div>';

      RenderedListRAWCode += `\n\n<!-- CSS code -->\n\n<style>
.centered-list {
  display: flex;
  justify-content: center;
}

.centered-list ul {
  padding: 0;
  margin: 0;
  text-align: center;
}

.centered-list ul li {
  /* This is a key property, as it will distribute items horizontally and maintain the ::after pseudo-element in the middle of the list. */
  display: inline;
}      
.centered-list ul li span {
  /* This is so band names with multiple words don't wrap to a new line. */
  white-space: nowrap;
}

.centered-list ul li::after {
  /* This is our magic trick. HTML browsers will strip a blank space from the ends of inline elements. */
  content: " ";

  /* This is just to add some breathing space. Note: Using 'padding' would cause problems if our list gets super-narrow. */
  letter-spacing: 1em;   
`;
        
RenderedListRAWCode += "background:" + listStyles[listStyle].svg;

RenderedListRAWCode += `}</style>`;  
     
    } else if (listTechnique === 1 ) {

        // For outputting visible HTML code in the browser (inside <pre><code>) 
        RenderedListRAWCode = '<!-- HTML code -->\n\n<div class="centered-list">\n\t<ul>\n' + props.List
        .split('\n')
        .filter(line => line.trim() !== '')
        // Getting object as string literal (via backticks), and including \n and \t for nice formatting
        .map(line => `\t\t<li><span>${line}</span></li>\n`).join('') + '\t</ul>\n</div>';

      RenderedListRAWCode += `\n\n<!-- CSS code -->\n\n<style>
.centered-list {
  position: relative;
  overflow: hidden;
}

.centered-list ul {
  display: flex;
  flex-wrap: wrap;  
  margin-left: -0.2em;  
  padding: 0;
  list-style-type: circle;
}
  
.centered-list li {
  flex-grow: 1;
  flex-basis: auto;
  margin: .25em 0;
  padding: 0 1em;
  position: relative;
}
  
.centered-list ul li span {
  text-align: center;
  white-space: nowrap;  
  left: -0.2em;  
  position: relative;
  display: block;
} 
            
.centered-list ul { `;
RenderedListRAWCode += 'list-style-type: "' + listStyles[listStyle].bullet + '"';
  
RenderedListRAWCode += `}</style>`;  


      
    } else if (listTechnique === 2 ) {

       RenderedList = "(Javascript method coming soon)"
       RenderedListRAWCode = "<!-- (Javascript method coming soon) -->";



    } else {
      RenderedList = "(No list found)"
      RenderedListRAWCode = "(No code to display)";
    }

    // Check if the instance is for "code" view (raw html in browser)
    if (props.Code) {
        return (
          <pre><code>{RenderedListRAWCode}</code></pre>    
        );
    } else {
      return (
        <div id="preview-list" className={`centered-list` + listTechnique + ` bulletStyle` + listStyle}><ul>{RenderedList}</ul></div>
      );
    }
}
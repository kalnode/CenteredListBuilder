import React from 'react'
import { useSelector } from "react-redux"

export default function ListOutput(props) {

    const listTechnique = useSelector(state => state.listTechnique)
    const listStyles = useSelector(state => state.listStyles)
    const listStyle = useSelector(state => state.listStyle)

    var RenderedListRAWCode = ""
    
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
    ))


    if (listTechnique === 0 ) {
        // For outputting visible HTML code in the browser (inside <pre><code>) 
        RenderedListRAWCode = '<!-- HTML code -->\n\n<div class="centered-list">\n\t<ul>\n' + props.List
        .split('\n')
        .filter(line => line.trim() !== '')
        // Getting object as string literal (via backticks), and including \n and \t for nice formatting
        .map(line => `\t\t<li><span>${line}</span></li>\n`).join('') + '\t</ul>\n</div>'

        RenderedListRAWCode += `\n\n<!-- CSS code -->\n\n<style>
.centered-list {
    /* useful to center the entire list in very narrow container widths */
    display: flex;
    justify-content: center;
}

.centered-list ul {
    padding: 0;
    margin: 0;
    text-align: center;
}

.centered-list ul li {
    /* This is important as we get our centering of list items, and at the same time browsers will trim the white-space from the end of the line (see below) */
    display: inline;
}      
.centered-list ul li span {
    /* OPTIONAL: This is items with multiple words don't wrap to a new line. */
    white-space: nowrap;
}

.centered-list ul li::after {
    /* This is our magic trick. HTML browsers will strip a blank space from the ends of inline elements. */
    content: " ";

    /* This is how we control spacing between items. It only applies to visible characters (ie the middle bullets). Using 'padding' or 'margin' would cause problems as they would still get applied to the last item in a line. */
    letter-spacing: 1em;

    /* This is how we actually render a visual bullet, in lieu of using content " ". Here, I'm using an inline base64 SVG which contains a text element. You can control color and other properties within. An image can be used here too, inline base64 or external. */
`
        RenderedListRAWCode += "    background:" + listStyles[listStyle].svg
        RenderedListRAWCode +=
`
}
</style>
`

    } else if (listTechnique === 1 ) {

        // For outputting visible HTML code in the browser (inside <pre><code>) 
        RenderedListRAWCode = '<!-- HTML code -->\n\n<div class="centered-list">\n\t<ul>\n' + props.List
        .split('\n')
        .filter(line => line.trim() !== '')
        // Getting object as string literal (via backticks), and including \n and \t for nice formatting
        .map(line => `\t\t<li><span>${line}</span></li>\n`).join('') + '\t</ul>\n</div>'

        RenderedListRAWCode += `\n\n<!-- CSS code -->\n\n<style>
.centered-list {
    position: relative;
    overflow: hidden;
}

.centered-list ul {
    display: flex;
    flex-wrap: wrap;

    /* This negative margin is important, it's what hides the bullets on the left-side of the list */
    margin-left: -0.2em;  
    padding: 0;
    list-style-type: circle;
}

.centered-list li {
    /* Flex-grow: 1 is our main trick... it stretches list items to full width, so we end up with a vertical row of bullets on the left-side. */
    flex-grow: 1;
    flex-basis: auto;
    margin: .25em 0;
    padding: 0 1em;
    position: relative;
}

.centered-list ul li span {
    text-align: center;
    white-space: nowrap;

    /* The following are important for spacing items. */
    left: -0.2em;  
    position: relative;
    display: block;
} 

/* This is where we control bullet style. */
.centered-list ul {
`
    RenderedListRAWCode += '    list-style-type: "' + listStyles[listStyle].bullet + '"'
    RenderedListRAWCode +=
`
}
</style>
`

    } else if (listTechnique === 2 ) {

        RenderedList = "(Javascript method coming soon)"
        RenderedListRAWCode = "<!-- (Javascript method coming soon) -->"

    } else {
        RenderedList = "(No list found)"
        RenderedListRAWCode = "(No code to display)"
    }

    // Check if the instance is for "code" view (raw html in browser)
    if (props.Code) {
        return (
            <pre><code>{RenderedListRAWCode}</code></pre>
        )
    } else {
        return (
            <div id="preview-list" className={`centered-list` + listTechnique + ` bulletStyle` + listStyle}><ul>{RenderedList}</ul></div>
        )
    }
}
import React from "react";

function Links(props) {
    function ifGit() {
        return props.github ? <a href={props.github}>{props.github}</a> : null;
    }
    function ifLinkedIn() {
        return props.linkedin ? <a href={props.linkedin}>{props.linkedin}</a> : null;
    }
    return(
        <div>
            <h3>Links</h3>
            {ifGit()}
            {ifLinkedIn()}
        </div>
    )
}

export default Links;
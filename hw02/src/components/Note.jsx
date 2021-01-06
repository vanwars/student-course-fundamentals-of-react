import React from "react";

function Note(props) {
    if (!props) {
        props = {};
    }
    return (
        <div className="note">
            <div>
                <h1>{props.title || 'Default Header'}</h1>
                <p>{props.content || 'Default content.'}</p>
            </div>
        </div>
    );
}

export default Note;
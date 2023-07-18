import React from "react";

function Term(props) {
    const {emoji, name, meaning} = props;
    return (
        <div className="term">
            <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {emoji}
            </span>
            <span>{name}</span>
            </dt>
            <dd>
            {meaning}
            </dd>
        </div>
    )
}

export default Term;
import React from "react";

export default function(props) {
    return(
        <div>
            <h1>Product Detail {props.match.params.slug}</h1>
        </div>
    )
}
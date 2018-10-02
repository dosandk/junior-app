import React from "react";

export default function Subtitles(props) {
    return <div className="list">
        <dl className="dl-style">
            {props.subtitles.map(
                item => <dt className="dt-style" key={item.item} onClick={props.clickSubtitle}>{item.item}</dt>
            )}
        </dl>
    </div>
}
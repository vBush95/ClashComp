import React from "react";

import "./LaneIcon.scss";

const LaneIcon = () => {

    return(
    <div className="laneIconContainer">
        <div className="laneIcon">
            <img className="imageLeft" src={require(`../../../../data/laneIcons/unranked-top.png`)} alt={"LaneIcon"}></img>  
        </div>
    </div>
);
};

export default LaneIcon;
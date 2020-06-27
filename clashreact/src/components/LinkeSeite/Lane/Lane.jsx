import React from "react";
import { ItemTypes } from "../../../ItemTypes";
import ChampionIcon from "./ChampionIcon/ChampionIcon";

import "./Lane.scss";
import LaneIcon from "./LaneIcon/LaneIcon";

const Lane = ({ key , status, classes}) => {

    // const ref = useRef(null);
  //   const [{isOver}, drop] = useDrop({
  //   accept: ItemTypes.CHAMPION,
  //   drop(item) {
  //     changeLane(item, status);
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //     draggingColor: monitor.getItemType(),
  //   }),
  // });

  // const opacity = isOver ? 1 : 0.7;
  // let backgroundColor = "#fff";
 
  // drop(ref);

    return(

        <div style={classes.test3} className="lane">
        <div className="left">
          <LaneIcon />
        </div>
        
          <div style={classes.test} className="right">
            <ChampionIcon name={"Ahri"}/>
          </div>
        </div>

    );
}

export default Lane;

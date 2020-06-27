import React, {useState, useCallback, useReducer} from "react";

import DropArea from "../DropArea";

import "./LinkeSeite.scss";
import Champion from "../Champions/Champion";
import Lane from "./Lane/Lane";
import LaneReducer from "./Lane/LaneReducer";

const LinkeSeite = () => {

    const [laneState, dispatch] = useReducer(LaneReducer, [] );

    const lanes = ["Top","Jungle","Middle","Bottom","Support"];

    const classes = {
        test: {
            // margin: "5px",
            // height: "100px",
            // width: "100px",
            // backgroundColor: "green",
            //padding: "0.5rem"
        },
        test2: {
            //height:  "150px",
            maxWidth: "100%",
            borderRadius: " 0.25rem",
            textAlign:"center",
            backgroundColor: "blue",
            //padding: "0.5rem",
            color: "white"
        },
        test3: {
           // width: "100%",
            // backgroundColor: "rgb(22, 22, 22)",
            borderRadius: " 0.25rem",
            color: "white"
        }
    };

    // const championPosition = [
    //     {id: 1, name:"", staus:""},
    //     {id: 2, name:"", staus:""},
    //     {id: 3, name:"", staus:""},
    //     {id: 4, name:"", staus:""},
    //     {id: 5, name:"", staus:""}
    // ];

//     const [championsOnLane, setChampionsOnLane] = useState(championPosition);

//   const changeLanes = useCallback(
//     (id, status) => {
//       let lane = changeLanes.find(lane => lane.id === id);
//       const laneIndex = changeLanes.indexOf(lane);
//       lane = { ...lane, status };
//       let newLanes = update(changeLanes, {
//         [laneIndex]: { $set: lane }
//       });
//       setChampionsOnLane(newLanes);
//     },
//     [changeLanes]
//   );


    return(
        <div className="links">
            {lanes.map((lane) => (
                <div style={classes.test2}>
                {lane}
                <Lane
                    key={lane}
                    status={lane}
                    // changeLane={changeLanes}
                    classes={classes}
                >
                        {/* <div>
                            {
                                championsOnLane.filter(item => item.status === lane)
                                .map(item => (
                                    <ChampionFrame name={item.name}/>
                                ))
                            }
                        </div> */}
                </Lane>
                </div>
            ))}
            {/* <DropArea /> */}
        </div>
    );
}

export default LinkeSeite;
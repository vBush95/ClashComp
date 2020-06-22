import React, {useState, useCallback} from "react";

import DropArea from "../DropArea";

import "./LinkeSeite.scss";
import Champion from "../Champions/Champion";
import Lane from "./Lane/Lane";

const LinkeSeite = () => {

    const lanes = ["top","jungle","mid","adc","support"];

    const classes = {
        test: {
            // margin: "5px",
            height: "100px",
            width: "100px",
            backgroundColor: "green",
        },
        test2: {
            height:  "150px",
            maxWidth: "100%",
            backgroundColor: "blue",
            textAlign:"center"
        },
        test3: {
            width: "80%"
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
                <div classes={classes.test2}>
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
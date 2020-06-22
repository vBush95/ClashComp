import React, {useEffect} from "react";
import { DragPreviewImage, useDrag } from 'react-dnd';

import "./ChampionFrame.scss";

import { ItemTypes } from "../../../ItemTypes";

import {useCountRenders} from "../../useCountRenders";

const ChampionFrame = React.memo(({name}) => {

    // const [{ isDragging }, drag] = useDrag({
    //     item: { 
    //         type: ItemTypes.CHAMPION,
    //         ...item 
    //     },
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   })

    // const [{ isDragging }, drag] = useDrag({
    //     item: { type: ItemTypes.CHAMPION },
    //     collect: (monitor) => ({
    //       isDragging: !!monitor.isDragging()
    //     })
    //   })

   // useCountRenders();
 
//console.log(image);
    return(
    <div className="container" >
    <div className="image" >
        <img src={require(`../../../data/tiles/${name}_0.jpg`)} alt={name}></img>
    </div>
         {name}
         {/* <div>{image}>>>>{`../data/champion/${image}`}</div> */}
{/* {console.log(`../data/tiles/${name}_0.jpg`)} */}
    </div>
   
);
});

export default ChampionFrame;
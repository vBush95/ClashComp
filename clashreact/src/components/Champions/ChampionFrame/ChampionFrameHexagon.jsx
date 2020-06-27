import React, {useEffect, useState} from "react";
import { DragPreviewImage, useDrag } from 'react-dnd';

import "./ChampionFrameHexagon.scss";

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


   // useCountRenders();
 
//console.log(image);
  

    return(
    <div className="image">
        <img className="imageCenter" src={require(`../../../data/tiles/${name}_0.jpg`)} alt={name}></img>
        <div className="nameWrapper">
        <div className="name">
             {name}
        </div>
        </div>
    </div>
         
   
);
});

export default ChampionFrame;
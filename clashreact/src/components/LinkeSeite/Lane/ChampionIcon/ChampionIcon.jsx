import React, {useEffect, useState} from "react";
import { DragPreviewImage, useDrag } from 'react-dnd';

import "./ChampionIcon.scss";

import { ItemTypes } from "../../../../ItemTypes";

const ChampionIcon = ({name}) => {


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
    <div className="championIcon">
        <img className="leftImage" src={require(`../../../../data/tiles/${name}_0.jpg`)} alt={name}></img>  
    </div>
);
};

export default ChampionIcon;
import React from "react";
import { useDrop } from 'react-dnd';

import "./DropArea.scss";
import { ItemTypes } from "../ItemTypes";
import ChampionFrame from "./Champions/ChampionFrame/ChampionFrame";

const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }
  function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
      return 'darkgreen'
    } else if (canDrop) {
      return 'darkkhaki'
    } else {
      return '#222'
    }
  }

//   {
//     name: `${allowedDropEffect} Dustbin`,
//     allowedDropEffect,
//   }

const DropArea = ({ allowedDropEffect }) => {

    const [{ canDrop, isOver, item }, drop] = useDrop({
        accept: ItemTypes.CHAMPION,
        drop: (item, monitor) => ({name: item.name }),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      });

      const isActive = canDrop && isOver;
      const backgroundColor = selectBackgroundColor(isActive, canDrop);
      //const championName = item.name;
      console.log(drop);
      console.log(item);
    return(
        <div ref={drop} style={{ ...style, backgroundColor }}>
        {`Works with ${allowedDropEffect} drop effect`}
        <br />
        <br />
        {/* <ChampionFrame name={championName}/> */}
        {isActive ? 'Release to drop' : 'Drag a box here'}
      </div>
    );
}

export default DropArea;
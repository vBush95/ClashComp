import React from "react";
import { ItemTypes } from "../../../ItemTypes";
import ChampionFrame from "../../Champions/ChampionFrame/ChampionFrame";



const Lane = ({ key , status, classes}) => {

  //   // const ref = useRef(null);
  //   const [, drop] = useDrop({
  //   accept: ItemTypes.CHAMPION,
  //   drop(item) {
  //     changeLane(item, status);
  //   }
  // });
  // // drop(ref);

    return(

        <div style={classes.test3}>

        status:{status}

          <div style={classes.test}>
            <ChampionFrame name={"Ahri"}/>
          </div>
        </div>

    );
}

export default Lane;

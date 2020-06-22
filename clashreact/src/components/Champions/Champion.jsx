import React, {useState, useEffect, useCallback} from "react";
import * as championData from "../../data/champion.json";

import ChampionFrame from "./ChampionFrame/ChampionFrame";
import ChampionSearch from "./Searchbar/ChampionSearch";

import "./Champion.scss";


const championsDataArray = Object.entries(championData.default.data);


const Champion = () => {

 
const [champions, setChampions] = useState([]);
const [loading, setLoading] = useState(false);
const [search, setSearch] = useState("");
const [filteredChampions, setFilteredChampions] = useState([]);



useEffect(() => {

    const championsArray = newChampionsArray(championsDataArray);
    //console.log(championsArray);

    setLoading(true);
    setChampions(championsArray);
    setLoading(false);
    console.log("state",champions);
    //console.log("state", champions);
}, []);

const matchingSearch = (object) => {

     let championTLC = object.champion.name.toLowerCase();
     let searchTLC = new RegExp(`${search}`,"i");

     console.log(championTLC, searchTLC);
     console.log(object, search);

    if(championTLC.match(searchTLC)) {
        return true;
    } else {
        return false;
    }
}

useEffect(() => {
    console.log(search);
     setFilteredChampions(
         champions.filter(matchingSearch)
     );
     console.log("filteredCHampions", filteredChampions);
}, [search, champions]);




//console.log("filteredChampion", filteredChampions);
    //console.log(champions);
    //console.log("state2", champions);

    // if(loading) {
    //     return (
    //         <p>...loading Champions</p>
    //     )
    // }

    const handleChange = useCallback((e) => {
        setSearch(e.target.value);
        //console.log(search);
    }, []);

    // const filteredChampions = champions.filter( champion => {
    //     return(
    //     champion.id.toLowerCase().includes(search.toLowerCase())
    //     );
    // });

//     return (
// <>
//        <ChampionSearch onChange={handleChange} search={search}/>
//          <div className="championContainer">
//          {
//              champions.map(([Key, value]) => {
//                  //console.log(key);
//                  return(
//                      <div key={parseInt(value.key, 10)}  className="championItem">
//                      {/* {console.log(parseInt(value.key, 10)),
//                      console.log(value.image.full)} */}
//                         {/* {value.id} */}
//                      { <ChampionFrame image={value.image.full} name={value.id}/> }
//                      </div>
//                  );
//              })
//          }

//         </div>
//         </>
//     );

// const options = {

// }


return (
    <div className="middleColumn">
       
        <ChampionSearch onChange={handleChange} search={search}/>
      
             <div className="championContainer" >
                {filteredChampions.length < 1 && (
                    <div className="championItem">
                        <ChampionFrame name={"no matches found"} /> 
                    </div>
                ) }
                
             {
                 filteredChampions.map(({champion: {name, data}}, idx) => {
                     return(
                         <div key={idx}  className="championItem">
                           {/* {console.log(name, data.id, idx)} */}
                        
                             {/* {name}  */}
                         <ChampionFrame name={data.id}/>
                         </div>
                     );
                 })
             }
            </div>
        
          
            </div>
        );

}

export default Champion;

const newChampionsArray = (array) => {
    let newArray = [];
   for(let i = 0; i < array.length; i++) {

       let singleChampion = array[i][0];
       let information = array[i][1];
       let entry = {
          champion: {
              name: singleChampion,
              data: information
          }
       };

      newArray.push(entry);

   }
   return newArray;
}


import React from "react";

import "./ChampionSearch.scss";

const ChampionSearch = React.memo(({
    onChange,
    search
}) => {

  //console.log("inside",search);
    return(

        <div className="searchbar">
        <div className="searchbarText">
            Searchbar
        </div>
        <input placeholder="Search Champion" type="text" className="championSearch" onChange={(e) => onChange(e)}></input>
    </div>
    );
});

export default ChampionSearch;


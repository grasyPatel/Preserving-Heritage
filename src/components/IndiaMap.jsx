import React, { useState } from "react";

import ReactDatamaps from "react-india-states-map";
import { useNavigate } from "react-router-dom";

const STATES = {
  Maharashtra: {
    value: 50,
    content: {
      txt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?"
    }
  }
};

const IndiaMap = () => {

    const navigate = useNavigate();

  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India"
  });

  const [stateLists, setStateLists] = useState(STATES);

  const stateOnClick = (data, name) => {
    const trimmedName = name.trim().replace(/\s+/g, ''); 
    navigate(`/${trimmedName}`)
    setactiveState({ data, name });
  };

  return (
    <ReactDatamaps
      regionData={stateLists}
      mapLayout={{
        hoverTitle: "Count",
        noDataColor: "#D36418",
        borderColor: "#ffffff"
      }}
      hoverComponent={({ value }) => {
        return (
          <>
             
            <p>{value.name}</p>
          </>
        );
      }}
      onClick={stateOnClick}
      activeState={activeState}
    />
  );
};

export default IndiaMap;

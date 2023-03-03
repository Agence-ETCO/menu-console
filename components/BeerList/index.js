import { useEffect, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import BeerCard4 from "../../components/BeerCard4";

const BeerList = (props) => {
  const {
    state,
    actions: {},
  } = useContext(AppContext);
  const preselect = [];
  const options1 = state.data
    .filter(
      (option) => option.attributes && option.attributes.category === "Beer"
    )
    .forEach((option) => {
      if (
        option.attributes.title.includes("Budweiser") ||
        option.attributes.title.includes("Michelob Ultra") ||
        option.attributes.title.includes("Stella Artois") ||
        option.attributes.title.includes("Corona") ||
        option.attributes.title.includes("Archibald Chipie")
      ) {
        preselect.push(option);
      }
    });

  return (
    <>
      {preselect.map((option, key) => (
        <BeerCard4
          tag={props.option || ""}
          index={key+1} 
          key={option.id}
          value={option.id}
          title={option.attributes.title}
          alcohol={option.attributes.alcohol}
          description={option.attributes.descriptionFr}
          saqCode={option.attributes.saqCode}
          prices={option.attributes.cost}
          option={option}
          imageUrl={option.attributes.imageURL}
        />
      ))}
    </>
  );
};

export default BeerList;

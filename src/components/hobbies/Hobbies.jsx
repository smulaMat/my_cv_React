import React from "react";

import "../component.css";

const Jobs = () => {
  const IMG_SOURCE_hobbies =
    "https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/246665159_3007673526115537_4344580222821284889_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=6jKz_WA7SpEAX972_Mz&tn=gmzzHjtWazQoEdKG&_nc_ht=scontent-waw1-1.xx&oh=00_AT88LdeoqI296-TudT3XR6-f-EQV_ErGIk-dbMbar8sAsA&oe=624372B6";
  const hobbiesList = [
    "Nowe technologie oraz gadżety elektroniczne",
    "Psychologia biznesu i marketingu",
    "Gra na gitarze, technologia muzyczna",
    "Uczestnictwo w biegach oraz maratonach",
    "Literatura faktu, psychologia oraz biograficzna",
  ];

  return (
    <div>
      <h1>Hobbies</h1>
      <div className="container">
        <ul>
          
          {hobbiesList.map((hobbiesList) => {
            return <li>{hobbiesList}</li>;
          })}
        </ul>
        <img
          src={IMG_SOURCE_hobbies}
          alt="breakImg"
          style={{ maxHeigth: "25%", maxWidth: "25%" }}
        />
      </div>
    </div>
  );
};

export default Jobs;

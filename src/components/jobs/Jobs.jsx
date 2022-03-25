import React from "react";

import "../component.css";

const Jobs = () => {
  const IMG_SOURCE_JOBS =
    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/173326695_2871589016390656_880771127569513918_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=1AZg6bo-LkgAX9G91cZ&_nc_ht=scontent-waw1-1.xx&oh=00_AT-KfYh5ioVykbCyM4mttpKWJw3JCYuXPIUWGb22CaEdoA&oe=624D7A64";
  const LastJobName = [
    "Specjalista ds. sprzedaży",
    "ME M08 Sp. z o.o. Media Expert | LUTY 2021 - obecnie",
  ];
  const LastJobsContent = [
    `aktywna sprzedażż i doradztwo produktów z portfolio sieci`,
    "jakościowe i indywidualne dopasowywanie usług doproduktów oraz ubezpieczeńń do sprzętów na wysokimpoziomie",
    "sukcesywne wdrażżanie nowych pracowników",
    "dbanie o porządek na sali sprzedażży oraz na magazynie",
    "regularne inwentaryzacje cząstkowe",
    "stała współpraca między sklepem a logistyką(transportem) produktów do klientów oraz do sklepu"
  ];

  return (
    <div>
      <h1>Jobs</h1>
      
        <div className="container">
        <h1> {LastJobName} </h1>  
        <ul>
          {LastJobsContent.map(LastJobsContent => {
            return <li>{LastJobsContent}</li>
          })} </ul>  
        <img
          src={IMG_SOURCE_JOBS}
          alt="breakImg"
          style={{ maxHeigth: "25%", maxWidth: "25%" }}
        />
      </div>
    </div>
  );
};

export default Jobs;

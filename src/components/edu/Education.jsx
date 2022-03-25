import React from "react";

import '../component.css'

const Education = () => {
const IMG_SRC = "https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/1404950_612530115455624_383423904_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2c4854&_nc_ohc=q_baX03JuJMAX_djjuS&_nc_ht=scontent-waw1-1.xx&oh=00_AT_FTWGSCQPo-1w-r3HkXHpUlZ_fPrB8VBVRlQmRYF-TUw&oe=624EA73B"
  const CONTENT = ['Kierunek: fizyka ', 'Specjalność: akustyka i realizacja dźwięku']
const UniversityPlace = "Akademia Jana Długosza w Częstochowie Studia licencjackie | PAŹ   2011 - LIS 2014"

  return (
    <div>
      <h1>Education</h1>
      <div className="container">
       <h1>{UniversityPlace}</h1> 
      <img src={IMG_SRC} ALT="breakImg" style={{display:'inline-block', maxHeigth: '25%', maxWidth:'25%'}}/>
        
          <ul> {CONTENT.map((CONTENT) => {
            return <li>{CONTENT}</li>;})} </ul>
          </div>

    </div>
  );
};

export default Education;
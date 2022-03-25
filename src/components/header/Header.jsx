import React from "react";

import "./Header.css";

const Header = () => {
  const IMG_SOURCE_Head =
    "https://scontent.fpoz3-1.fna.fbcdn.net/v/t1.6435-9/89850224_3616841735024432_7421469222791806976_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=amFTFOMGyWgAX_gWsjv&_nc_ht=scontent.fpoz3-1.fna&oh=00_AT9v_bhBsvE5weE0ijP8bmHTPHCb7qULM1C3T5KPu50kBA&oe=625D4D2D";
  const HeaderWelcome = [
    "Hi, I'm Mateusz Smulski",
    "Future Front-End Developer",
  ];


  return (
    <div class="container">
      
      <img class='head-img'
        src={IMG_SOURCE_Head}
        alt="breakImg"
        // style={{ maxHeigth: "50%", maxWidth: "100%" }}
      />
      <div class="topleft">
          <h2>
        {HeaderWelcome.map((HeaderWelcome) => {
          return <ol>{HeaderWelcome}</ol>;
        })}</h2>
      </div>
    </div>
  );
};

export default Header;

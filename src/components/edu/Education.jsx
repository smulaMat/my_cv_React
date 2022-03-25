import React from "react";

import '../component.css'

const Education = () => {
const IMG_SRC = "https://scontent-waw1-1.xx.fbcdn.net/v/t31.18172-8/1404950_612530115455624_383423904_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=2c4854&_nc_ohc=q_baX03JuJMAX_djjuS&_nc_ht=scontent-waw1-1.xx&oh=00_AT_FTWGSCQPo-1w-r3HkXHpUlZ_fPrB8VBVRlQmRYF-TUw&oe=624EA73B"
  const CONTENT = `Cechuje mnie zdecydowane działanie oraz szukanie prostych sposobów na
  rozwiązywanie problemów. W swoim życiu zawodowym dowiedziałem się, jak
  ważna jest dbałość o kontakt z klientami, a także relacje wewnątrz
  zespołu. Elastyczność, praca pod presją czasu i otwartość na zmiany to
  coś, czego wymagały ode mnie dotychczasowe zajęcia. Lubię się rozwijać,
  dlatego w nowej pracy nie boję się wyzwań . W wolnych chwilach czytam
  książki, popijając do tego hektolitry czarnej kawy, po czym wybiegam na
  naście kilometrów rozporządzić zmagazynowaną energią.`

  return (
    <div>
      <div className="container">
      <img src={IMG_SRC} ALT="breakImg" style={{display:'inline-block', maxHeigth: '25%', maxWidth:'25%'}}/>
        
          <p > {CONTENT} </p>
          </div>

    </div>
  );
};

export default Education;
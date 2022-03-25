import React from "react";

import '../component.css'

const AboutMe = () => {
  const IMG_SOURCE =
    "https://media-exp1.licdn.com/dms/image/C4D03AQGlCkFywSORNw/profile-displayphoto-shrink_200_200/0/1565862503189?e=1653523200&v=beta&t=roFUHh87wJ7TBj_SwHcH5YQdrJpE5sMkQ9vPvKESPCQ";
  const CONTENT = `Cechuje mnie zdecydowane działanie oraz szukanie prostych sposobów na
  rozwiązywanie problemów. W swoim życiu zawodowym dowiedziałem się, jak
  ważna jest dbałość o kontakt z klientami, a także relacje wewnątrz
  zespołu. Elastyczność, praca pod presją czasu i otwartość na zmiany to
  coś, czego wymagały ode mnie dotychczasowe zajęcia. Lubię się rozwijać,
  dlatego w nowej pracy nie boję się wyzwań . W wolnych chwilach czytam
  książki, popijając do tego hektolitry czarnej kawy, po czym wybiegam na
  naście kilometrów rozporządzić zmagazynowaną energią.`;
  

  return (
    <div>
      <h1> About Me </h1>
      <div className="container">
        <img
        src={IMG_SOURCE}
        alt="breakImg"
        style={{maxHeigth: "25%", maxWidth: "25%" }}
      />
      <p> {CONTENT} </p>
      </div>
    </div>
  );
};

export default AboutMe;

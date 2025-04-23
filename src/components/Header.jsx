import React from "react";

const Header = ({ alumno }) => {
  return (
    <div className="Header">
      <h1>
        Portafolio {alumno.nombre} {alumno.apellido}
      </h1>
      <hr />
    </div>
  );
};

export default Header;

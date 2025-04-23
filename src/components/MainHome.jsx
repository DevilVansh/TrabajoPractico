import React from "react";

const MainHome = ({ alumno }) => {
  return (
    <div>
      <div className="card">
        <img src={alumno.imagen} alt="imagen" className="card-img" />
        <h2>
          {alumno.nombre} {alumno.apellido}
        </h2>
        <p>{alumno.descripcion}</p>
      </div>
    </div>
  );
};

export default MainHome;

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainHome from "../components/MainHome";

const Home = () => {
  const alumno = {
    nombre: "Matías",
    apellido: "Roldán",
    descripcion:
      "Soy estudiante de programación de la Facultad Regional Tucumán. Tengo experiencia en lenguajes como C#, JavaScript, y React.",
    imagen:
      "https://content.warframe.com/PublicExport/Lotus/Interface/Icons/Player/KoumeiGlyph.png!00_rbshD1SRvffDPQwInOsT+g",
  };
  return (
    <div>
      <Header alumno={alumno} />
      <MainHome alumno={alumno} />
      <Footer />
    </div>
  );
};

export default Home;

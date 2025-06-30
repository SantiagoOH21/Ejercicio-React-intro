import "./App.css";
import PersonClass from "./components/PersonClass";
import PersonFunc from "./components/PersonFunc";

function App() {
  return (
    <>
      <h2>Componente Funcional</h2>
      <PersonFunc name="Frodo" surname="Baggins" age={30} />
      <PersonFunc name="Samwise" surname="Gamgee" age={26} />
      <PersonFunc name="Meriadoc" surname="Brandybuck" age={28} />

      <h2>Componente de Clase</h2>
      <PersonClass name="Peregrin" surname="Took" age={28} />
      <PersonClass name="Aragorn" surname="Elessar" age={49} />
      <PersonClass name="Gandalf" surname="White" age={77} />
    </>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfOrdens, setListOfOrdens] = useState([]);
  const [local, setLocal] = useState("");
  const [ativo, setAtivo] = useState("");
  const [mantenedor, setMantenedor] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getOrdens").then((response) => {
      setListOfOrdens(response.data);
    });
  }, []);

  const createOrdem = () => {
    Axios.post("http://localhost:3001/createOrdem", {
      local,
      ativo,
      mantenedor,
    }).then((response) => {
      setListOfOrdens([
        ...listOfOrdens,
        {
          local,
          ativo,
          mantenedor,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="ordensDisplay">
        {listOfOrdens.map((ordem) => {
          return (
            <div>
              <table>
              <td>Local: {ordem.local}</td>
              <td>Ativo: {ordem.ativo}</td> 
              <td>Mantenedor: {ordem.mantenedor}</td>
              </table>
            </div>
          );
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Local..."
          onChange={(event) => {
            setLocal(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ativo..."
          onChange={(event) => {
            setAtivo(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Mantenedor..."
          onChange={(event) => {
            setMantenedor(event.target.value);
          }}
        />
        <button onClick={createOrdem}> Criar Ordem </button>
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';
import PlanetCard from './components/PlanetCard';

function App() {

  let [count, setCount] = useState(1)
  const [img, setImg] = useState<string>('')
  const [nome, setName] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [species, setSpecies]  = useState<any>()
  var [origem, setOrig] = useState<string>('')
  const [dataPlanet, setDataP] = useState<any>();

  function forward(){
    setCount(count += 1) 
  }
  function back(){
    setCount(count > 1 ? count -= 1 : 1) 
  }
  const origemNull = {
    name: "Unknown",
    type: "Unknown",
    dimension: "Unknown"
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character/${count}`;
    axios.get(URL)
      .then((response) => {
        setName(response.data.name);
        setImg(response.data.image);
        setSpecies(response.data.species);
        setStatus(response.data.status);
        setOrig(response.data.origin.url);
        console.log("Personagem:", response.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar personagem:", error);
      });
  }, [count]);

  useEffect(() => {
    if (origem) {
      axios.get(origem)
        .then((responseP) => {
          setDataP(responseP.data);
          console.log("Dados do planeta de origem:", responseP.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar origem:", error);
        });
    } else {
      // Se a origem for vazia ou indefinida, seta os valores "Unknown"
      setDataP(origemNull);
    }
  }, [origem]);



  return (
    <>
    <main>
      <button onClick= {back}>
            <img src= '../../../src/assets/img/arrow_back.svg' alt="" />
      </button>
      <div id='info'>
        <Card name={nome} img={img} status={status} species={species}></Card>
        <PlanetCard pName={dataPlanet?.name} pDimension={dataPlanet?.dimension} pType={dataPlanet?.type}/>
      </div>
      <button onClick= {forward}>
            <img src= '../../src/assets/img/arrow_forward.svg' alt="" />
      </button>
    </main>
    
    </>
  )
}

export default App

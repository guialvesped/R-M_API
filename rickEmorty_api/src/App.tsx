import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';

function App() {

  const[data, setData] = useState<any>();
  let [count, setCount] = useState(1)
  const [img, setImg] = useState<string>('')
  const [nome, setName] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [species, setSpecies]  = useState<any>()
  const [origin, setOrig] = useState<string>('')

  function forward(){
    setCount(count += 1) 
  }
  function back(){
    setCount(count -= 1) 
  }
  
  
  var URL = `https://rickandmortyapi.com/api/character/${count}`

  useEffect(() => {
    axios.get(URL).then((response) =>{
      setData(response.data); 
      setName(response.data.name);
      setImg(response.data.image)
      setSpecies(response.data.species)
      setStatus(response.data.status)
      setOrig(response.data.origin.name)
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [URL])

  return (
    <>
    <main>
      <button onClick= {back}>
            <img src= '../../src/assets/img/arrow_back.svg' alt="" />
      </button>
      <Card name={nome} img={img} status={status} species={species} origin={origin}></Card>
      <button onClick= {forward}>
            <img src= '../../src/assets/img/arrow_forward.svg' alt="" />
      </button>
    </main>
    
    </>
  )
}

export default App

import React,{useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Table from './Components/Table';
import { Data } from './api' 
import Searchbar from './Components/Searchbar';

function App() {
  // let podaci:Data[] = [
  //   {
  //     id: 1,
  //     name: "Petar",
  //     surname: "Petrovic",
  //     userType: "Programer",
  //     createdDate: "21.12.2021",
  //     city: "Beograd",
  //     address: "Zorana Djindjica 45"
  //   },
  //   {
  //     id: 2,
  //     name: "Marko",
  //     surname: "Nikolic",
  //     userType: "Tester",
  //     createdDate: "03.03.2021",
  //     city: "Novi Sad",
  //     address: "Laze Teleckog 21"
  //   },
  //   {
  //     id: 3,
  //     name: "Nikola",
  //     surname: "Milosevic",
  //     userType: "Zaposleni",
  //     createdDate: "28.10.2021",
  //     city: "Beograd",
  //     address: "Aleksinackih rudara 38a"
  //   },
  //   {
  //     id: 4,
  //     name: "Strahinja",
  //     surname: "Milinkovic",
  //     userType: "Programer",
  //     createdDate: "09.08.2021",
  //     city: "Beograd",
  //     address: "Ustanicka 145"
  //   }
  // ]
  const [data, setData] = useState<Data[]>([]);

  useEffect(()=>{
    fetch('http://localhost:3001/person')
    .then(res=>res.json())
    .then((data: Data[])=>setData(data))
  },[])

  return (
    <div className="App">
      <header className="header">
        Application
      </header>
      <Navbar/>
      <Searchbar podaci={data}/>
      <Table podaci={data}/>
    </div>
  );
}

export default App;

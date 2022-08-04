import React,{useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Table from './Components/Table';
import { Data } from './api' 
import Searchbar from './Components/Searchbar';

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [pretraga, setPretraga] = useState<string>("")

  useEffect(()=>{
    fetch('http://localhost:3001/person')
    .then(res=>res.json())
    .then((data: Data[])=>setData(data))
  },[])

  const trazi = () => {
    let newData;
    newData = data.filter(x=>x.name.startsWith(pretraga))
    setData(newData);
  }

  return (
    <div className="App">
      <header className="header">
        Application
      </header>
      <Navbar/>
      <Searchbar podaci={data} searchCriteria={pretraga} onChangeCriteria={(value)=>setPretraga(value)} search={trazi}/>
      <Table podaci={data}/>
      <div>{pretraga}</div>
    </div>
  );
}

export default App;

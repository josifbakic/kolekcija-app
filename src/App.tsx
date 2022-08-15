import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Table from "./Components/Table";
import { Data } from "./api";
import Searchbar from "./Components/Searchbar";
import { Route, Routes } from "react-router-dom"

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [pretraga, setPretraga] = useState<string>("");
  const [tip, setTip] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3001/person")
      .then((res) => res.json())
      .then((data: Data[]) => setData(data));
  }, []);

  const trazi = () => {};

  const prikazTabele = (data: Data[]) => {
    if (pretraga.length != 0) {
      let newData;
      newData = data.filter((x) =>
        x.name.toLowerCase().startsWith(pretraga.toLowerCase())
      );
      if (tip === "") {
        return newData;
      } else {
        return newData.filter((x) => x.userType === tip);
      }
    } else {
      if (tip === "") {
        return data;
      } else {
        return data.filter((x) => x.userType === tip);
      }
    }
  };

  return (
    <div className="App">
      <header className="header">Application</header>
      <Navbar />
      <Searchbar
        podaci={data}
        searchCriteria={pretraga}
        changeSearchCriteria={(value) => setPretraga(value)}
        typeCriteria={tip}
        changeTypeCriteria={(value) => setTip(value)}
        search={trazi}
      />
      {/* <div>
      <Routes>
        <Route path="/" element={<Table podaci={prikazTabele(data)} />}/>
      </Routes>
      </div> */}
      <Table podaci={prikazTabele(data)} />
    </div>
  );
}

export default App;

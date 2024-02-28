import React, { useEffect,useState } from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  const [id, setId] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([]);
  const {name, type, dimension} = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x)=>{
            return fetch(x).then((res)=>res.json());
        })
      );
      setResults(a);
    })();
  },[api]);
  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Location :{" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}
          </span>

        </h1>
        <h3 className="text-center">
          Dimension : {dimension === "" ? "Unknown" : dimension}
        </h3>
        <h5 className="text-center mt-4">
          Type : {type === "" ? "Unknown" : type}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className='text-center mb-4'>Pick Location</h4>
        <InputGroup name="Location - " setId={setId} total={126}/>
        </div>
        <div className="col-8">
          <div className="row">
            <Cards page="/location/" results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
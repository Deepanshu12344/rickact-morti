import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const CardDetails = () => {
  const [charInfo, setCharInfo] = useState([]);
  const {id} = useParams();
  const { name, status, location, image, origin, gender, species, type} = charInfo;
  console.log(charInfo);
  let api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json());
      setCharInfo(data);
    })();
  },[api]);

  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-3'>
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt="" className='img-fluid' style={{borderRadius: "10px"}}/>
        {(()=>{
            if(status==='Alive'){
              return (
                <div className="badge bg-success fs-5">{status}</div>
                )
              }
              else if(status==="Dead"){
                return (
                <div className="badge bg-success fs-5">{status}</div>
                )
              }
              else{
                return (
                  <div className="badge bg-success fs-5">{status}</div>
                )
              }
          })()}
          <div className="content">
            <div className=''>
              <span className='fw-bold'>Gender : </span>
              {gender}
            </div>
            <div className=''>
              <span className='fw-bold'>Location : </span>
              {location?.name}
            </div>
            <div className=''>
              <span className='fw-bold'>Origin : </span>
              {origin?.name}
            </div>
            <div className=''>
              <span className='fw-bold'>Species : </span>
              {species}
            </div>
            <div className=''>
              <span className='fw-bold'>Type : </span>
              {type === "" ? "Unknown" : type}
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardDetails
import React from 'react'
import Gender from './Category/Gender';
import Status from './Category/Status';
import Species from './Category/Species';

const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
  const handleClearFilter=()=>{
    setGender("");
    setStatus("");
    setSpecies("");
    window.location.reload();
  }
  return (
    <div className='col-3'>
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div className='d-flex justify-content-center mb-4'>
        <button onClick={handleClearFilter} className='btn btn-primary w-100'>Clear Filter</button>
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber}/>
      </div>
    </div>
  )
}

export default Filters
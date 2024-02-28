import React from 'react'
import styles from './Search.module.css';

const Search = ({setSearch, setPageNumber}) => {
    const handleReload=(e)=>{
        e.preventDefault();
    }
  return (
    <form className='d-flex flex-sm-row justify-content-center my-5 gap-4'>
        <input onChange={(e)=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }} type="text" placeholder='Search for characters' className={`${styles.border} ${styles.input} px-2 border border-primary border-2 rounded shadow-sm`} style={{width:'540px',height:'45px'}}/>
        <button onClick={handleReload} className='btn btn-primary'>Search</button>
    </form>
  )
}

export default Search
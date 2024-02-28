import React from 'react'
// import { useState } from 'react';
import styles from './Styles.module.css'; 
import { Link } from 'react-router-dom';

const Cards = ({ results, page }) => {
  // const[badgeColor, setBadgeColor] = useState('danger');
  console.log(results);
  let display;
  if(results){
    display=results.map((x)=>{
      let {id, name, image, location, status} = x;
      return(
        <Link style={{textDecoration: "none"}} to={`${page}${id}`} key={id} className={`col-4 position-relative mb-4 text-dark`}>
          <div className={`${styles.cards}`}>      
            <img src={image} alt="" className={`${styles.img} img-fluid`}/>
          <div style={{padding: '10px'}} className='content'>
            <div className="fs-5 fw-bold mb-4">{name}</div>
            <div className="fs-6">Last Location</div>
            <div className="fs-5">{location.name}</div>
          </div>
          {(()=>{
            if(status==='Alive'){
              return (
                <div className={`${styles.badger} position-absolute badge bg-success`}>{status}</div>
                )
              }
              else if(status==="Dead"){
                return (
                <div className={`${styles.badger} position-absolute badge bg-danger`}>{status}</div>
                )
              }
              else{
                return (
                  <div className={`${styles.badger} position-absolute badge bg-secondary`}>{status}</div>
                )
              }
          })()}
        </div>
        </Link>
      )
    })
  }else{
    display = "No Character Found :/";
  }
  return <>{display}</>;
}

export default Cards
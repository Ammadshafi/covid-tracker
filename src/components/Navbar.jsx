import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = ({state}) => {
  const[search,setSearch]=useState("")
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container">
    <Link className="navbar-brand text-light   fw-bold " to="/" style={{fontSize:"30px"}} >Covid-19 Tracker</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active text-light fw-bold"  to="/">World wide</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light fw-bold" to="/Countries">Country's</Link>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search"
         aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="button" type="submit" onClick={()=>state(search)}>Search</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
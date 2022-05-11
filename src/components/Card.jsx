import React from 'react'

const Card = ({pro,name}) => {

  return (

            <>
            <div className='text-light text-center p-2 shadow' style={{width:"100%",background:"black"}}>{name}</div>
            <div className="card-body shadow">
            <h5 className="card-title text-center">{pro}</h5>
        </div>
        </>
        

   
  )
}

export default Card
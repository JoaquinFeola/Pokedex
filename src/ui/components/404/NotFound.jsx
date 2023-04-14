import React from 'react'

export const NotFound = () => {
  return (
    <div className='container content-page-container d-flex justify-content-center '>
        <img 
            src="/public/not_found.svg"
            className='card-img w-50' 
            alt="" 
        />
        {/* <h2 className='display-1'>404</h2>
        <p className='display-4'>This page not found</p> */}
    </div>
  )
}

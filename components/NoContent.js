import React from 'react'
import { useSelector } from 'react-redux'

export const NoContent = () => {
    const {busqueda} = useSelector(state => state.search.searchs)
    return (
        <div className="justify-self-center mt-10  p-5">
            <h1 className='text-xl text-center font-light mb-4'>Oops! No encontramos lugares para  "<span>{busqueda}</span>"</h1>
        </div>
    )
}

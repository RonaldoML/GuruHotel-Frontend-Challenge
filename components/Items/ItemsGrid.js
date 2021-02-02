import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const ItemsGrid = () => {
    const {searchs, data} = useSelector(state => state.search);
    return (
        <div className="justify-self-center">
            <h1 className='text-xl text-center font-light mb-4'>Los mejores 10 lugares para "<span>{searchs.busqueda}</span>"</h1>
            <div className="">
            {
                data &&
                data.map( business => (
                    <Item
                        key={business.id}
                        empresa={business}
                    />
                ))
            }
            </div>

        </div>
    )
}

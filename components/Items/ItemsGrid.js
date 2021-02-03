import React from 'react'
import { useSelector } from 'react-redux'
import { Item } from './Item'

export const ItemsGrid = () => {
    const {searchs, data} = useSelector(state => state.search);
    return (
        <div className="justify-self-center md:w-7/12 p-10">
            <h1 className='text-xl mb-4'>Los mejores lugares para "<span className=" font-bold">{searchs.busqueda}...</span>"</h1>
            <div className="block">
            {
                data &&
                data.map( (business, index) => (
                    <Item
                        key={ index }
                        count= { index + 1 }
                        empresa={business}
                    />
                ))
            }
            </div>

        </div>
    )
}

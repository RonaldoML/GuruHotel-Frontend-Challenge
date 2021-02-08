import React from 'react';
import { useSelector } from 'react-redux'
import { Item } from './Item';

export const ItemsGrid = () => {
    const {searchs, data} = useSelector(state => state.search);
    return (
        <div className="justify-self-center w-screen pt-10 p-10 animate__animated animate__fadeInLeft animate__faster">
            <h1 
                className='text-xl mb-5 text-center'
            >
                Los mejores lugares para "<span className=" font-bold">{searchs.busqueda}</span>" en "<span className="font-bold">{searchs.ubicacion}</span>"...
            </h1>
            <div className="block md:grid grid-cols-2 gap-10 place-items-auto">
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

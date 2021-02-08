import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { texts } from '../../utils/utils';


export const NoContent = ({ type }) => {

    const [text] = useState(type === 1 ? texts.noContent : texts.searchSomething);

    const { busqueda, ubicacion } = useSelector(state => state.search.searchs);
    
    return (
        <div className="flex flex-wrap content-center justify-center mb-10">
            <div className="space-y-6 justify-self-center p-5">
                <div className="flex justify-center">
                    <h1 className='text-xl text-center font-light mb-4'>{text} "<span className="font-bold">{busqueda}</span>" en "<span className="font-bold">{ubicacion}</span>"</h1>
                </div>
            </div>
        </div>
    )
}


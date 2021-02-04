import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { images, texts } from '../utils/utils';



export const NoContent = ({ type }) => {

    const [text] = useState(type === 1 ? texts.noContent : texts.searchSomething);
    const [img] = useState(type === 1 ? images.noContent : images.flecha);

    const { busqueda } = useSelector(state => state.search.searchs);
    return (
        <div className="flex flex-wrap content-center justify-center mb-10">
            <div className="space-y-6 justify-self-center p-5">
                {/* <div className="flex flex-wrap content-center justify-center m-10"> */}
                <div className="flex justify-center">
                    <img src={img} width={type === 1 ? 50 : 100} />
                </div>
                <div className="flex justify-center">
                    <h1 className='text-2xl text-center font-light mb-4'>{text} <span className="font-bold">{busqueda}</span></h1>
                </div>
            </div>
        </div>
    )
}


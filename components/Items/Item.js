import React from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { select, visit } from '../../redux/actions/search';


export const Item = ({ empresa, count }) => {
    const { id, name, rating, phone, review_count, location } = empresa;

    let { image_url } = empresa;

    image_url = image_url ? image_url : '/yelp.png';

    const { visited } = useSelector(state => state.search)

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!visited.some(v => v === id)) {

            dispatch(visit(id));
        }
        dispatch(select(id));
        Router.push('/nosotros')
    }

    return (
        <div className="w-full mb-4 hover:shadow-md bg-indigo-50" onClick={handleClick}>
            <div className="p-5 bg-white rounded-lg">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-7/12 h-6/12 mb-2">
                        {/* <div className="border rounded mb-5"> */}
                        <img src={image_url} alt={name} name={name} className="object-cover h-48 w-full" />
                        {/* </div> */}


                    </div>
                    <div className="lg:w-7/12 xl:w-7/12 h-6/12 pl-5">
                        <div className="flex">

                            <p className="font-bold text-3xl text-yellow-500 mb-2">{count}. {name}</p>
                            {
                                visited.some(v => v === id) &&
                                <img src="/viewed.png" alt="visto" title="visto" className="h-5 mt-2 mx-5" />
                            }
                        </div>
                        <p className="text-gray-600 mb-1">Ubicación:
                                <span className="text-gray-700 font-bold"> {location.address1}</span>
                        </p>
                        <p className="text-gray-600 mb-1">Rating:
                                <span className="text-gray-700 font-bold"> {rating}</span>
                        </p>
                        <p className="text-gray-600 mb-1">Teléfono:
                                <span className="text-gray-700 font-bold"> {phone}</span>
                        </p>
                        <p className="text-gray-600 mb-1">Número de reseñas:
                                <span className="text-gray-700 font-bold"> {review_count}</span>
                        </p>

                        <div className="cursor-pointer mb-2 block" onClick={() => Router.push('/nosotros')}>
                            <span className={visited.some(v => v === id) ? "text-pink-900 hover:text-indigo-900 text-sm underline" : "text-blue-400 hover:text-indigo-900 text-xs underline"}>
                                Ver más...
                                    </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

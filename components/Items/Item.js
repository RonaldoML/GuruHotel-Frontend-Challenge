import Link from 'next/Link';
import React from 'react'
import { useSelector } from 'react-redux';

export const Item = ({ empresa }) => {
    const { id, name, rating, phone, review_count, location } = empresa;

    let { image_url } = empresa;

    image_url = image_url ? image_url : '/yelp.png';

    const {visited} = useSelector(state => state.search)

    const handleClick = () => {
        visited.push[id];

    }

    return (
        <div className="w-full px-3 mb-4" onClick={handleClick}>
            <div>
                <div className="p-5 shadow-md bg-white">
                    <div className="lg:flex">
                        <div className="lg:w-5/12 xl:w-3/12">
                            <div className="border rounded">
                                <img src={image_url} alt={name} /> 
                            </div>


                        </div>
                        <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{name}</p>
                            <p className="text-gray-600 mb-4">Ubicación:
                                <span className="text-gray-700 font-bold"> {location.address1}</span>
                            </p>
                            <p className="text-gray-600 mb-4">Rating:
                                <span className="text-gray-700 font-bold"> {rating}</span>
                            </p>
                            <p className="text-gray-600 mb-4">Teléfono:
                                <span className="text-gray-700 font-bold"> {phone}</span>
                            </p>
                            <p className="text-gray-600 mb-4">Número de reseñas:
                                <span className="text-gray-700 font-bold"> {review_count}</span>
                            </p>
                            <Link href="/nosotros">
                                <a className=" mb-2 block">
                                    Historial
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

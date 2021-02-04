import React from 'react'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { select, visit } from '../../redux/actions/search';
import { convertKm, images, ratingImage } from '../../utils/utils';


export const Item = ({ empresa }) => {
    const { id, name, rating, phone, review_count, location, distance } = empresa;

    let { image_url } = empresa;

    image_url = image_url ? image_url : '/yelp.png';

    const { visited } = useSelector(state => state.search)

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!visited.some(v => v === id)) {

            dispatch(visit(id));
        }
        dispatch(select(id));
        //Router.push('/nosotros')

    }

    const handleMaps = (e) => {
        e.stopPropagation();
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="mb-5 md:mb-0 rounded-lg hover:shadow-xl bg-blue-50" onClick={handleClick}>
            <div className="p-10">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-7/12 h-6/12">
                        <img src={image_url} alt={name} name={name} className="object-cover rounded h-60 w-full" />
                    </div>
                    <div className="lg:w-7/12 xl:w-7/12 h-6/12 pl-5">
                        <div className="flex">
                            <p className="font-bold text-4xl text-yellow-500 mb-3">{name}</p>
                            {
                                visited.some(v => v === id) &&
                                <img src={images.viewed} alt="visto" title="visto" className="h-5 mt-3 mx-5" />
                            }
                        </div>
                        <p className="flex text-gray-600 mb-1">
                            <img src={ratingImage(rating)} alt={rating} title={rating} className="h-5 m-1" />
                            <span className="text-gray-700 font-bold" title="reseñas"> {review_count}</span>
                        </p>
                        <p className="flex text-gray-600 mb-1 cursor-pointer" onClick={handleMaps}>
                            <img src={images.mapsIcon} alt="visto" title="maps" className="h-5 m-1" />
                            <span className="text-gray-700 font-bold mt-1" title="reseñas">{convertKm(distance)} Km</span>
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="text-gray-700 font-bold"> {location.address1}</span>
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="text-gray-700 font-bold"> {phone}</span>
                        </p>
                        <div className="cursor-pointer mb-2 block" onClick={() => Router.push('/nosotros')}>
                            <span
                                className={visited.some(v => v === id) ? "text-pink-900 hover:text-indigo-900 text-sm underline" : "text-blue-400 hover:text-indigo-900 text-xs underline"}
                            >
                                Ver más...
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

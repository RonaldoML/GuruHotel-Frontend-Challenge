import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, select, visit } from '../../redux/actions/search';
import { images, ratingImage } from '../../utils/utils';


export const Item = ({ empresa }) => {
    const { id, name, rating, display_phone, review_count, location } = empresa;

    let { photos } = empresa;

    const image_url = photos.length > 0 ? (photos[0] === 'https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg' ? images.noImage : photos[0]) : images.noImage;

    const { visited } = useSelector(state => state.search);

    const dispatch = useDispatch();

    const handleClick = () => {
        if (!visited.some(v => v === id)) {

            dispatch(visit(id));
        }
        dispatch(select(id));
        dispatch(fetchBusiness(id));

    }

    const handleMaps = (e) => {
        e.stopPropagation();
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <div className="mb-5 md:mb-0 rounded-xl hover:shadow-xl bg-blue-50 p-5" onClick={handleClick}>
            <div className="sm:flex">
                <div className="sm:w-5/12 xl:w-6/12 h-6/12">
                    <img src={image_url} alt={name} name={name} className="object-cover border-2 rounded-md h-60 w-full" />
                </div>
                <div className="sm:w-6/12 xl:w-5/12 h-6/12 sm:pl-5">
                    <div className="flex mt-2">
                        <p className="truncate font-bold text-4xl text-yellow-500 mb-5">{name}</p>
                        {
                            visited.some(v => v === id) &&
                            <img src={images.viewed} alt="visto" title="visto" className="h-5 mt-3 mx-3" />
                        }
                    </div>
                    <div className="flex text-gray-600 mb-1">
                        <img src={ratingImage(rating)} alt={rating} title={rating} className="h-4 ml-0 m-1" />
                        <span className="text-gray-700 cursor-default truncate" title="reseñas"> {review_count} Reseñas</span>
                    </div>
                    <div className="flex text-gray-600 mb-1 " title="maps" >
                        <img src={images.mapsIcon} alt="visto" className="h-5 ml-0 m-1 cursor-pointer" onClick={handleMaps} />
                        <div className="block xl:flex">
                            <div className="mt-1 cursor-pointer" onClick={handleMaps}>
                                <span className="text-gray-700 mt-1 md:ml-1"> {location.address1}</span>
                            </div>
                        </div>

                    </div>
                    {
                        display_phone &&
                        <div className=" flex text-gray-600 mb-1">
                            <img src={images.call} alt="telefono" title="telefono" className="h-3 ml-0 m-2" />
                            <span className="text-gray-700"> {display_phone}</span>
                        </div>
                    }
                    <div className="cursor-pointer mb-2 block">
                        <span
                            className={visited.some(v => v === id) ? "text-pink-900 hover:text-indigo-900 text-sm hover:underline" : "text-blue-400 hover:text-indigo-900 text-xs hover:underline"}
                        >
                            Ver más...
                            </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

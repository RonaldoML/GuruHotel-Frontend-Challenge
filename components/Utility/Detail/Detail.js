import React from 'react';
import { MapContainer } from '../Map';
import { Hour } from '../Hour';
import { convertSchedule, images, ratingImage } from '../../../utils/utils';
import { ReviewsGrid } from './ReviewsGrid';

export const Detail = ({ business }) => {

    const { name, coordinates, categories, photos, review_count, rating, display_phone, location, price, hours, is_closed, reviews } = business;

    const image_url = photos.length > 0 ? (photos[0] === 'https://s3-media3.fl.yelpcdn.com/bphoto/None/o.jpg' ? images.noImage : photos[0]) : images.noImage;

    let categorias = categories.reduce((a, v) => {
        a.title = `${a.title}`.concat(`, ${v.title}`);
        return a;
    });


    return (
        <div className="flex rounded-lg mb-2">
            <div className="min-w-full lg:flex text-sm ">
                <div className="min-w-full h-6/12 p-2">
                    <div className="block rounded-t  bg-blue-50 p-3 min-w-full">
                        <div className="-mx-3 -mt-3">
                            <div className="w-full h-6/12">
                                <img src={image_url} alt={name} name={name} className="object-cover rounded-t h-64 w-full" />
                            </div>
                        </div>
                        <div className="block mt-3">
                            <div className="flex  justify-center mt-2">
                                <div className="font-bold text-4xl text-yellow-500 text-center mb-3">{name}</div>
                            </div>
                            <div className="block md:grid grid-cols-2 gap-2 justify-items-center">
                                <div className="block">

                                    <div className="flex text-gray-600 mb-1">
                                        <img src={ratingImage(rating)} alt={rating} title={rating} className="h-3 ml-0 m-1" />
                                        <span className="text-gray-700 font-bold cursor-default" title="reseñas"> {review_count} Reseñas</span>
                                    </div>
                                    <div className="text-gray-600 mb-2">
                                        {
                                            price &&
                                            <span className="text-gray-700 font-bold">{price} <span className="font-light">-</span></span>
                                        }

                                        <span className="text-gray-700 "> {categorias.title}</span>
                                    </div>
                                    <div className="text-gray-600 mb-2">
                                        <span className="text-gray-700 font-bold"> {is_closed ? "Permanentemente cerrado" : "Abierto en horarios indicados"}</span>
                                    </div>
                                </div>
                                <div className="block">
                                    <div className="flex text-gray-600 mb-1 cursor-pointer" title="maps">
                                        <img src={images.mapsIcon} alt="visto" className="h-3 ml-0 m-1" />
                                        <span className="text-gray-700 mt-1"> {location.address1}</span>
                                    </div>
                                    {
                                        display_phone &&
                                        <div className="flex text-gray-600">
                                            <img src={images.call} alt="telefono" title="telefono" className="h-3 ml-0 m-1" />
                                            <span className="text-gray-700"> {display_phone}</span>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="text-gray-700 text-center font-bold mt-3 mb-2">Ubicación y Horario</div>
                        <div className={hours.length > 0 ? "block sm:grid gap-2 grid-cols-2 text-gray-600 mb-2" : "text-gray-600 mb-2"}>
                            <div>
                                <MapContainer
                                    coordinates={coordinates}
                                    maxHeight={40}
                                />
                            </div>
                            {
                                hours.length > 0 &&
                                <div className="self-center">
                                    <div className="grid justify-center mt-5 sm:mt-0">

                                        {
                                            convertSchedule(hours).map((d, index) => (
                                                <Hour key={index} schedule={d} />
                                            ))
                                        }
                                    </div>

                                </div>
                            }
                        </div>
                    </div>
                    <ReviewsGrid />
                </div>
            </div>
        </div>
    )
}
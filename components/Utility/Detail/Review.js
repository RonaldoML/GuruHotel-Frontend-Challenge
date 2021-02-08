import React from 'react';
import { images, ratingImage } from '../../../utils/utils';

export const Review = ({review}) => {

    const { time_created, text, rating, user } = review;

    const { name, image_url } = user;

    const imagen = image_url ? image_url : images.user;

    return (
        <div className="block p-4">
            <div className="flex items-center mb-2">
                <div>
                    <img src={imagen} className="rounded-full h-10 w-10"/>
                </div>
                <div>
                    <span className="font-bold text-sm ml-2">{name}</span> 
                </div>
            </div>
            <div className="flex items-center mb-2">
                <img src={ratingImage(rating)} alt={rating} title={rating} className="h-3 ml-0 my-1 mr-2" />
                <span className="text-gray-500 text-xs">{time_created}</span>
            </div>
            <div>
                {text}
            </div>
            
        </div>
    )
}

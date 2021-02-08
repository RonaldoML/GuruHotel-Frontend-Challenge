import React from 'react';
import { useSelector } from 'react-redux';
import { Review } from './Review';

export const ReviewsGrid = () => {

    const { business } = useSelector(state => state.search);

    const { reviews } = business;

    return (
        <div className="rounded-b bg-gray-50 -mx-3 pb-2">
            {
                reviews.map(( review, index) => (
                    <Review
                        key={ index }
                        review={review}
                    />
                ))
            }
        </div>
    )
}

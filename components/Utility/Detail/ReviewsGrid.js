import React from 'react';
import { useSelector } from 'react-redux';
import { Review } from './Review';

export const ReviewsGrid = () => {

    const { business } = useSelector(state => state.search);

    const { reviews } = business;

    return (
        <div className="border rounded-b bg-blue-50">
            {
                reviews.length > 0 &&
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

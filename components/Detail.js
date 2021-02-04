import React from 'react'
import { useSelector } from 'react-redux';

export const Detail = () => {

    const { business } = useSelector(state => state.search);

    const { name } = business;

    return (
        <div>
            { name }
        </div>
    )
}
import React from 'react';
import { images } from '../../utils/utils';

export const Loading = () => {
    return (
        <div className="flex flex-wrap content-center justify-center m-10">
            <img src={images.loadingSVG} alt="loading" width="10%" className="animate-spin"/>
        </div>
    )
}

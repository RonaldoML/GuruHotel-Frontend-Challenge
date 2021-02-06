import React from 'react';
import { images } from '../../utils/utils';

export const Banner = () => {
  return (
    <div className="flex flex-wrap content-center justify-center mt-10 p-10 w-screen">
      <img
        src={images.logo}
        alt="Picture of the author"
        width={700}
        height={50}
      />
    </div>
  )
}

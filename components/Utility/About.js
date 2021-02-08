import React from 'react';
import { images } from '../../utils/utils';

export const About = () => {
    return (
        <div className="flex align-items justify-center bottom-0 h-52 w-screen bg-gray-900">
            <div className="self-center">
                <div className="flex align-items justify-center mb-5">
                    <div className="self-center m-5">
                        <a href="https://github.com/RonaldoML" target="_blank" >
                            <img src={images.github} width={30} />
                        </a>
                    </div>
                    <div className="self-center m-5">
                        <a href="https://www.linkedin.com/in/ronaldo-monserrate" target="_blank">
                            <img src={images.linkedin} width={30} />
                        </a>
                    </div>
                </div>
                <div className="self-center">
                    <span className="text-white">Ronaldo Monserrate &copy;</span>
                </div>
            </div>
        </div>
    )
}

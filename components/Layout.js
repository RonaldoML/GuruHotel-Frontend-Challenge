import React from 'react';
import Head from 'next/head';
import { About } from './Utility/About';
import { Header } from './Header/Header';
import { images } from '../utils/utils';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Guru Hotel</title>
                <link
                    rel="shortcut icon" id="favicon"
                    href={images.logo}>
                </link>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
                />
            </Head>

            <div className="md:flex sm:flex min-h-screen">

                <div className="min-h-screen">
                    <Header />
                    {children}
                </div>

            </div>
            <About />
        </>
    )
}

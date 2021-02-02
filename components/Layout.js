import React from 'react';
import Head from 'next/head';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Guru Hotel</title>
                <link rel="shortcut icon" id="favicon" href="/logo-original.svg"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" type="text/css" rel="stylesheet" />

            </Head>


            <div className="md:flex sm:flex min-h-screen">

                <div className="sm:min-h-screen w-full">
                    <div className="sm:flex justify-center w-full p-5">
                        <img
                            src="/logo-original.svg"
                            alt="Picture of the author"
                            width={700}
                            height={200}
                        />
                    </div>
                    {children}
                   
                </div>

            </div>

        </>
    )
}

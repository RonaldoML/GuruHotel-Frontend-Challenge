import React from 'react';
import Link from 'next/Link';
import { useRouter } from 'next/router';

export const Sidebar = () => {

    const router = useRouter();

    return (
        // <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
        <div className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">

            <div>
                <p className="text-white text-2xl font-black">Guru Hotel Challenge</p>
                {/* <Image
                    src="/logo-original.svg"
                    alt="Picture of the author"
                    width={500}
                    height={150}
                /> */}
            </div>

            <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/">
                        <a className="text-white block">

                            Buscar
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/nosotros" ? "bg-blue-800 p-2" : "p-2"}>
                    <Link href="/nosotros">
                        <a className="text-white mb-2 block">
                            Historial
                    </a>
                    </Link>
                </li>
            </nav>
        </div>
    )
}

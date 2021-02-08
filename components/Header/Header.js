import React from 'react';
import { useSelector } from 'react-redux';
import {SearchForm } from '../Form/SearchForm';
import { Banner } from '../Utility/Banner';
import { Loading } from '../Utility/Loading';
import { NoContent } from '../Utility/NoContent';

export const Header = () => {

    const { data, load, content } = useSelector(state => state.search);

    return (
        <div className={data.length > 0 ? "grid justify-items-center shadow-sm w-screen bg-blue-400 pb-5" : "grid justify-items-center shadow-sm w-screen bg-blue-400 h-screen"}>
            <Banner />
            <SearchForm/>
            <div className="h-30">
                {
                    load &&
                    <Loading />
                }
                {
                    content &&
                    <NoContent type={1} />
                }
            </div>
        </div>
    )
}

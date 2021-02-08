import React from 'react';
import { convertTime } from '../../utils/utils';

export const Hour = ({ schedule }) => {

    const { name, day, horario } = schedule;

    const currentDay = new Date().toLocaleString("es", { weekday: "long" });

    return (
        <div className={currentDay == name.toLowerCase() ? "flex font-bold mb-4 text-10 w-full" : "flex mb-4 text-10 w-full"}>
            <div className="mr-2 w-14">{name}</div>
            <div>
                {
                    horario.length !== 0 
                    ? horario.map((h, index) => (<div key={index}>{convertTime(h.start)} - { convertTime(h.end)}</div>)) 
                    : <div className="text-red-500">CERRADO</div>
                }
            </div>
        </div>
    )
}

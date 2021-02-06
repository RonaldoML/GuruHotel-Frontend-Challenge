import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

export const MapContainer = ({ coordinates }) => {

    const { data } = useSelector(state => state.search);
    const { name } = useSelector(state => state.search.business);

    const mapStyles = {
        height: "40vh",
        width: "auto",
        border: "1px solid gray",
        borderRadius: "5px",
        boxShadow: "0px 0px 3px gray"
    };

    let locations = [];

    if (!coordinates) {

        data.forEach((business) => {
            locations.push({
                name: `${business.name}`,
                location: {
                    lat: business.coordinates.latitude,
                    lng: business.coordinates.longitude
                }
            })
        });
    }

    const defaultCenter = {
        lat: coordinates ? coordinates.latitude : data[0].coordinates.latitude,
        lng: coordinates ? coordinates.longitude : data[0].coordinates.longitude
    }

    return (
        <div className="w-full rounded-sm animate__animated animate__fadeInRight animate__faster">
            {
                !coordinates &&
                <h1 className='text-xl font-bold text-center mb-7'>Mira su ubicación en el mapa</h1>
            }
            <LoadScript
                googleMapsApiKey='AIzaSyCVx558Ww9CU0esMgM_3I_mS4p2zmx3SL8'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={11}
                    center={defaultCenter}>

                    {
                        coordinates
                            ?
                            <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} title={name} />
                            :
                            locations.map((item, index) => {
                                return (
                                    <InfoWindow
                                        key={index}
                                        position={item.location}
                                        clickable={true}
                                    >
                                        <p>{item.name}</p>
                                    </InfoWindow>
                                )
                            })
                    }
                </GoogleMap>

            </LoadScript>
        </div>
    )
}

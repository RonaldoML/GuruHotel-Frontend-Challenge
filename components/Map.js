import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

export const MapContainer = () => {
    const { data } = useSelector(state => state.search)

    const mapStyles = {
        height: "60vh",
        width: "auto",
        border: "1px solid gray",
        borderRadius: "10px",
        boxShadow: "0px 0px 3px gray"
    };

    let locations = [];

    data.forEach((business) => {
        locations.push({
            name: `${business.name}`,
            location: {
                lat: business.coordinates.latitude,
                lng: business.coordinates.longitude
            }
        })
    });

    const defaultCenter = {
        lat: data[0].coordinates.latitude, lng: data[0].coordinates.longitude
    }

    return (
        <div className="w-full rounded-md animate__animated animate__fadeInRight animate__faster">
            <h1 className='text-xl font-bold text-center mb-10'>Mira su ubicación en el mapa</h1>

            <LoadScript
                googleMapsApiKey='AIzaSyCVx558Ww9CU0esMgM_3I_mS4p2zmx3SL8'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={11}
                    center={defaultCenter}>

                    {
                        locations.map((item, index) => {
                            return (
                                //  <Marker key={item.name} position={item.location} title={item.name}/>
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

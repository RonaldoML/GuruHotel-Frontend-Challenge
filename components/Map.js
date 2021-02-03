import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

export const MapContainer = () => {
    const { data } = useSelector(state => state.search)

    const mapStyles = {
        height: "100vh",
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
        <div className="p-10 md:w-5/12 sm:h-0 rounded-md h-full">

            <LoadScript
                googleMapsApiKey='AIzaSyCVx558Ww9CU0esMgM_3I_mS4p2zmx3SL8'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={11}
                    center={defaultCenter}>

                    {
                        locations.map(item => {
                            return (
                                //  <Marker key={item.name} position={item.location} title={item.name}/>
                                <InfoWindow
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

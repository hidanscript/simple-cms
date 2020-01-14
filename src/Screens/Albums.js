import React, { useEffect, useState } from 'react';
import Album from './../Components/Albums/Album';
import './css/Albums.css';

function Albums() {

    const [ albums, setAlbums ] = useState([]);
    const [ title, setTitle] = useState("Cargando");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then(res => res.json())
            .then(json => {
                setAlbums(json); 
                setTitle("Albums");
            });
    }, []);

    let mapAlbums = albums.map( (element, index) => {
        element = {...element , key:index }
        return <Album index={index} url={element.url} />
    });

    return(
        <div className="albums-screen">
            <h2>{title}</h2>
            <div className="albums">
                {mapAlbums}
            </div>
        </div>
    );
}

export default Albums;
import React, { useEffect , useState } from 'react';
import './css/Home.css';

function Home() {

    const [ albums, setAlbums ] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
            .then(res => res.json())
            .then(json => setAlbums(json));
    }, []);
    
    const selectAlbum = index => {
        albums[index] = {...albums[index] , active: !albums[index].active};
    };

    let mapAlbums = albums.map( (element, index) => {
        element = {...element , key:index }
        return <div key={index} className="home-album"><img onClick={() => selectAlbum(element.key)} src={element.url} alt="album" /></div>;
    });

    return (
        <div className="home-screen">
            <div className="container">
                {mapAlbums}
            </div>
        </div>
    )
}

export default Home;

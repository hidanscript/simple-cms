import React, { useEffect , useState } from 'react';
import './css/Home.css';
import NavColumn from './../Components/NavColumn';
import NavBar from './../Components/Navigation/NavBar';

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
            <nav className="nav-navigation" >
                <NavBar />
            </nav>
            <div className="toolbar">
                <NavColumn />
            </div>
            
            <div className="container">
                <h1>Home</h1>
                <div className="albums">
                    {mapAlbums}
                </div>
            </div>
        </div>
    )
}

export default Home;

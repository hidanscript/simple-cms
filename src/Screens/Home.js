import React from 'react';
import './css/Home.css';
import NavColumn from './../Components/NavColumn';
import NavBar from './../Components/Navigation/NavBar';
import { Switch, Route } from 'react-router-dom';

//Screens
import Albums from './Albums';
import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';

function Home() {

    /*
    const selectAlbum = index => {
        albums[index] = {...albums[index] , active: !albums[index].active};
    };
    */

    return (
        <div className="home-screen">
            <nav className="nav-navigation" >
                <NavBar />
            </nav>
            <div className="toolbar">
                <NavColumn />
            </div>
            {
            //pages
            }
            <div className="container">
                <Route render={({location}) => (
                    <Switch>
                        <Route exact path="/" component={HomeScreen}/>
                        <Route path="/albums" component={Albums}/>
                        <Route path="/add" component={AddScreen}/>
                    </Switch>
                )} />
            </div>
        </div>
    )
}

export default Home;

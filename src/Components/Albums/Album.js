import React from 'react';

function Album(props) {
    return(
        <div key={props.index} className="home-album">
            <img src={props.url} alt="album" />
        </div>
    );
}

export default Album;
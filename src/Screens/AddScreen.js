import React from 'react';
import './css/AddScreen.css';


function AddScreen() {
    return(
        <div className="add-screen">
            <h2>Add Post</h2>
            <form className="add-post-form">
                <input className="add-input" type="text" placeholder="Titulo del post" />
                <textarea placeholder="Descripción del post" rows="28" />
                <input className="btn-submit" type="submit" value="Confirmar"/>
            </form>
            
        </div>
    );
}

export default AddScreen;
import React from 'react';
import language from '../Assets/language.jpg'

function Header() {
    var coverImage={
        width: '100%',
    }
    var heroText = {
        textAlign: "center",
        position: "absolute",
        top: "19%",
        right: "35%",
        fontSize: "80px",
        color: '#4056A1'

    }

    var heroInfo = {
        textAlign: "center",
        position: "absolute",
        bottom: "42%",
        left: "35%",
        fontSize: "20px",
        color: '#4056A1'

    }
    return (
        <div>
            <img src={language} style={coverImage} />
            <h1 style={heroText}>Welcome to the corpus of something...</h1>
            <p style={heroInfo}>A place for the public and researchers to add to a language data set</p>
        </div>
    );
}

export default Header;
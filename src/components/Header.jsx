import React from 'react';
import language from '../Assets/language.jpg'

function Header() {
    var textStyle={
        color: '#4056A1'
    }

    var coverImage={
        width: '100%'
    }
    return (
        <div>
            <img src={language} style={coverImage} />
            <h1 style={textStyle}>Welcome to the corpus of something...</h1>
        </div>
    );
}

export default Header;
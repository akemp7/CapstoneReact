import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import YoutubeEmbedVideo from 'youtube-embed-video';
import Navbar from './Navbar';
import language from '../Assets/language.jpg'

function NewContributeForm(props) {
    let _summary = null;

    function handleNewSubmission(event) {
        event.preventDefault();
        props.onNewContribution({ summary: _summary.value, id: v4() })
    
        _summary.value = '';
    }

    var coverImage = {
        width: '100%',
        opacity: '0.2',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
        position: "relative",
        top: "0",
        left: "0",
    }
    var video={
        textAlign: "center",
        position: "absolute",
        top: "55%",
        right: "30%",
    }

    var inputField={
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px',
        fontSize: '25px',
        textAlign: 'center',
        color:'#4056A1',
        position: "absolute",
        top: "19%",
        right: "35%",
    }

    var heroInfo = {
        textAlign: "center",
        position: "absolute",
        bottom: "50%",
        right: "20%",
    }

    var button={
        color: 'blue',
        marginLeft: '625px'
    }


    return (
        <div>
            <Navbar />
            <div>
                <img src={language} style={coverImage} />
                <p style={inputField}>Contribute to the corpus! </p>
                <p style={heroInfo}> Watch the short video, and then summarize what you saw. Try to be as detailed as possible, but do not worry about spelling, punctuation, and other forms of grammar.</p>
                <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} style={video} />

                <form onSubmit={handleNewSubmission}>
                    <textarea className='form-control'
                        id='summary'
                        placeholder='Write your summary here'
                        ref={(input) => { _summary = input; }} />
                    <button style={button} type="submit" className="btn-btn-info">Submit!</button>
                </form>
            </div>  
        </div>
    );
}

NewContributeForm.propTypes = {
    onNewContribution: PropTypes.func
};

export default NewContributeForm;
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import YoutubeEmbedVideo from 'youtube-embed-video';
import Navbar from './Navbar';

function NewContributeForm(props) {
    let _summary = null;

    function handleNewSubmission(event) {
        event.preventDefault();
        props.onNewContribution({ summary: _summary.value, id: v4() })
    
        _summary.value = '';
    }

    var video={
        marginTop: '60px',
        marginLeft: '350px'
    }

    var inputField={
        marginTop: '10px',
        marginLeft: '20px',
        marginRight: '20px'
    }

    return (
        <div>
            <Navbar />
            <p style={inputField}>Contribute to the corpus! Watch the short video, and then summarize what you saw. Try to be as detailed as possible, but do not worry about spelling, punctuation, and other forms of grammar.</p>
            <YoutubeEmbedVideo videoId="AkLnj5pJtDI" suggestions={false} style={video} />

            <form onSubmit={handleNewSubmission} style={inputField}>
                <textarea className='form-control'
                    id='summary'
                    placeholder='Summarize what happened in the video'
                    ref={(input) => { _summary = input; }} />
                <button type="submit" className="btn-btn-info">Submit!</button>
            </form>
        </div>
    );
}

NewContributeForm.propTypes = {
    onNewContribution: PropTypes.func
};

export default NewContributeForm;
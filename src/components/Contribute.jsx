import React from 'react';
import PropTypes from 'prop-types';

class Contribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: null,
            
        };
    }

    render() {
        var text= {
            textAlign: 'center',
            marginTop: '25px',
            fontSize: '18px'
        }

        var pos = require("pos");
        var words = new pos.Lexer().lex(this.props.summary);
        var tagger = new pos.Tagger();
        var taggedWords = tagger.tag(words);
        return (
            <div>
                    <p style={text}>{taggedWords}</p>
            </div>
        );
    }
}

Contribute.propTypes = {
    summary: PropTypes.string,
};

export default Contribute;
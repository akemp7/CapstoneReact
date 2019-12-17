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
        return (
            <div>
                    <p style={text}>{this.props.summary}</p>
            </div>
        );
    }
}

Contribute.propTypes = {
    summary: PropTypes.string,
};

export default Contribute;
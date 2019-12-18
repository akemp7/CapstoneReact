import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import language from '../Assets/language.jpg'

//Not able to search by POS tags yet

class ContributeControl extends React.Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        };
    }
   
    search(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        let filteredList = this.props.contributeList.filter(
            (summ) => {
                return summ.summary.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1;
            }
        );

        var background = {
            color:  '#4056A1',
            textAlign: 'center',
            marginTop: '20px'
        }


        var buttonInfo = {
            textAlign: "center",
            position: "absolute",
            top: '90%',
            left: "40%",
        }


        return(
            <div>
                <Navbar />
                <div className="container">
                    <h3 style={background}>Summaries: Search for a particular word, letter, or phrase below.</h3>
                    {filteredList.map((summ) =>
                        <Contribute summary={summ.summary}
                            key={summ.id} />
                    )}
                </div>
                <button style={buttonInfo}><input type="text" value={this.state.searchTerm} onChange={this.search.bind(this)} />Search!</button>
            </div>
        )
    }
}


ContributeControl.propTypes = {
    contributeList: PropTypes.array,
};

export default ContributeControl;
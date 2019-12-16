import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

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
        return(
            <div>
                <Navbar />
                <div>
                    {filteredList.map((summ) =>
                        <Contribute summary={summ.summary}
                            key={summ.id} />
                    )}
                </div>
                <input type="text" value={this.state.searchTerm} onChange={this.search.bind(this)}/>
            </div>
        )
    }
}


ContributeControl.propTypes = {
    contributeList: PropTypes.array,
};

export default ContributeControl;
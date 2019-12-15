import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';
import Search from './Search';

function ContributeControl(props) {
    return (
        <div>
            <Navbar />
            <div>
                {props.contributeList.map((summ) =>
                    <Contribute summary={summ.summary}
                        key={summ.id} />
                )}
            </div>
            <Search onSearchCreation={props.handleAddingNewSearchTerm} />
        </div>
    );
}

ContributeControl.propTypes = {
    contributeList: PropTypes.array,
    handleAddingNewSearchTerm: PropTypes.func
};

export default ContributeControl;
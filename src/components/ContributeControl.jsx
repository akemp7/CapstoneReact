import React from 'react';
import Contribute from './Contribute';
import Navbar from './Navbar';
import PropTypes from 'prop-types';

class ContributeControl extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <Navbar />
                <div>
                    {this.props.contributeList.map((summ) =>
                        <Contribute summary={summ.summary}
                            key={summ.id} />
                    )}
                </div>
                <input type="text" value="Search"/>
            </div>
        )
    }
}


// function ContributeControl(props){
//         return (
//             <div>
//                 <Navbar />
//                 <div>
//                     {props.contributeList.map((summ) =>
//                         <Contribute summary={summ.summary}
//                             key={summ.id} />
//                     )}
//                 </div>
//             </div>
//         );
//     }



ContributeControl.propTypes = {
    contributeList: PropTypes.array,
};

export default ContributeControl;
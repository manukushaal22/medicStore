import React from 'react';

class Offer extends React.Component{

    render() {
        return (
            <div className="box6">
                <img src={"img/"+this.props.imgName}  alt={this.props.imgName}/>
            </div>
        );
    }
}

export default Offer;

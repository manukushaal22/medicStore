import React from 'react';
import Offer from "./Offer";

class OfferList extends React.Component{

    render() {
        return (
            <div className="flex-container6">
                {
                    this.props.imgList.map((i) => (
                        <Offer imgName={i} />
                    ))
                }
            </div>
        );
    }
}

export default OfferList;

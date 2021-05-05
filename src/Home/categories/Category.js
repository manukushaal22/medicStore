import React from 'react';

class Category extends React.Component{

    render() {
        return (
            <div className="box3">
                <img src={"img/"+this.props.imgName}  alt={this.props.imgName}/>
                <p style={{fontWeight: "bolder", color: "black"}}>{this.props.name}</p>
            </div>
        );
    }
}

export default Category;

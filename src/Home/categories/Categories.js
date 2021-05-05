import React from 'react';
import Category from "./Category";

class Categories extends React.Component{

    render() {

        return (
            <div className="Category">
                <h1 style={{textAlign: "center", fontWeight: "bolder", fontSize: 40}}>Categories</h1>
                <div className="flex-container1">
                    {
                        !this.props.dataList || this.props.dataList.map((i) => (
                            <Category name={i.name} imgName={i.imgName} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Categories;

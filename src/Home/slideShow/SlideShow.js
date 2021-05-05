import React from 'react';

class SlideShow extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentImg: 0
        }
    }

    componentDidMount() {
        this.slide();
    }

    slide = () => {
        let curr = this.state.currentImg;
        this.setState({
            currentImg: (curr+1) % this.props.imgList.length
        })
        setTimeout(this.slide, 2000);
    }


    render() {
        return (
            <div className="slideshow-container">
                <div className="mySlides1 fade">
                    <img src={"img/"+this.props.imgList[this.state.currentImg]} style={{width: "100%", height: 480}} />
                </div>
            </div>
        );
    }
}

export default SlideShow;

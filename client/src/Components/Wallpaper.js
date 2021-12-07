import React from "react";
import "../Styles/Home.css";

class Wallpaper extends React.Component {
    render() {
        const {locationData } = this.props;
        return (
            <div>
                <div className="container-fluid wallpaper">
            
                    <div className="container">

                        <div className="login ">
                            <a href="#" id="login-link">Login</a>
                            <a href="#" id="signup-link">Create an account</a>
                        </div> 

                        <div className="row text-center">
                            <div className="col-sm-12 col-md-12 col-lg-12 logo">
                                <b id="logo-text">e!</b>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="heading-1 col-sm-12 col-md-12 col-lg-12">
                                <p id="tag-line"> Find the best restaurants, cafés, and bars</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <select className="location-search col-sm-12 col-md-6 col-lg-6">
                                <option value="0">select</option>
                                {locationData.map((item, index) => {
                                    return <option key={index+1} value={index+1}>{`${item.name}, ${item.city}`}</option>
                                })}
                            </select>
                            <input className="restro-search col-sm-12 col-md-6 col-lg-6" type="text" placeholder="Search for restaurants" />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Wallpaper;
import React from "react";
import axios from "axios";
import Wallpaper from "./Wallpaper";
import QuickSearch from "./QuickSearch";

class Home extends React.Component{
    constructor(){
        super();
        this.state ={
            locations: [],
            QsDataTitle: []
        }
    }
    componentDidMount() {
        axios({
            url: "http://localhost:3001/location",
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            this.setState({ locations: res.data.locations })
        })
        .catch()

        axios({
            url: "http://localhost:3001/mealtypes",
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then(res => {
            this.setState({ QsDataTitle: res.data.Mealtypes })
        })
        .catch() 
    }

    render(){
        const { locations, QsDataTitle } = this.state;
        return(
            <div>
                <Wallpaper locationData={locations}/>
                <QuickSearch QsData={QsDataTitle}/>
            </div>
        )
    }
}

export default Home;
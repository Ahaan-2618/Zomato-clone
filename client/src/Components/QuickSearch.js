import React from "react";
import "../Styles/Home.css";
import QsTiles from "./QsTiles";

class QuickSearch extends React.Component {
    render() {
        const {QsData} = this.props;
        return (
            <div>
                <div className="container-fluid">
                    <h3 id="heading-2">Quick searches</h3>
                    <p id="heading-3"> Discover restaurants by type of meal</p>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {QsData.map((item,index)=> {
                            return <QsTiles key={index} QSItemdata ={item}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSearch;
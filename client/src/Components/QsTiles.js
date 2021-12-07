import React from "react"
import "../Styles/Home.css";
import { withRouter } from "react-router-dom";

class QsTiles extends React.Component{

    handleNavigate = (mealTypeId) => {
        this.props.history.push(`filter?mealtype=${mealTypeId}`);
    }

    render(){
        const {QSItemdata, key} = this.props;
        return (
            <div key={key} className="col-sm-12 col-md-6 col-lg-4 mx-auto my-3 rect" onClick={ () => this.handleNavigate(QSItemdata.meal_type)}>
                <span style={{display: "inline-block"}}>
                   <img className="qs-image" src={`./${QSItemdata.image}`} alt="image" /> 
                </span>
                <span style={{display: "inline-block"}}>
                   <p className="qs-text">{QSItemdata.name}</p>
                   <p className="qs-text1">{QSItemdata.content}</p>
                </span> 
            </div>
        )
    }
}

export default withRouter(QsTiles);
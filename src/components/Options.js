import React from "react"
import Option from "./Option";
;
const Options=(props)=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.RemoveAll}
            >
                Delete All
            </button>
        </div>
        
        {props.options.length===0 && <p className="widget__message">Please add a option</p>}
        {props.options.map((option,index) => <Option key={option} count={index + 1}optiontext={option} RemoveOption={props.RemoveOption}/>)}
    </div>
)

export default Options;
import React, { use, useState } from "react";
import "./rate.css"

export default function Rate({setSubmit,setRate,rate}) {
    const buttons=[1,2,3,4,5]
    return(
        <div className="rateDiv">
            <p>How did we do?</p>
            <p>Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!</p>
            <div className="mapBtn">
            {buttons.map((item)=>
                <button key={item} onClick={()=>setRate(item)}
                style={{backgroundColor: rate === item?'orange':""}} >{item}</button>)}
            </div>
            <button onClick={()=> rate && setSubmit(true)}>Submit</button>          
        </div>
    )
}
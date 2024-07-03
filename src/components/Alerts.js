import React  from 'react'

export default function Alerts(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    return (
        <div style={{height:"10vh"}}>
           { props.alert && <div class="alert alert-success" role="alert">
             <strong> {capitalize(props.alert.type)}! {props.alert.msg}</strong>
            </div>}
            </div>
        

    )
}

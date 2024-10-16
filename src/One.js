import React from "react";


 function One (props)
 {
    return(
        <>
        <img src ={props.src} height={props.height} width={props.width} style={{borderRadius:'50%'}} ></img>
         <h1 style={{fontSize:'20px'}}>{props.title}</h1>
         <p>{props.about}</p>
        </>
    )
 }
 export default One;
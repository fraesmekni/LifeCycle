import React from 'react'
 export default class WillMount extends React.Component{
     render(){
         return <> 
         <button  onClick={this.props.click} >
            onClick={()=>window.Location=""}
            setTimeout(function(){ alert("Hello") }, 2000);
            Home Page
         </button>
         </>

    }

 }
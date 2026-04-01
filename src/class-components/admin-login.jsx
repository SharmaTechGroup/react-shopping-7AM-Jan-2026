import axios from "axios";
import { Form, Formik, Field } from "formik";
import React from "react";
import { Toolbar } from "../controlled-components/toolbar";
import { Navbar } from "../controlled-components/navbar";

export class AdminLogin extends React.Component
{
     constructor(){
         super();
         this.state = {
            msg: 'Click Insert Button'
         }
        
     }

     handleInsertClick(){
        this.setState({
            msg: 'Record Inserted'
        })
     }

     componentDidMount(){
       
     }
     render(){
        return(
            <div className="container">
                <Toolbar brandTitle='Amazon' menuItems={['Home','Offers','Shop','Contact']} />
                <Navbar brandLogo='bi bi-facebook' orientation='landscape' brandTitle='Facebook' menuItems={['Home','About', 'Contact']} />
                <button onClick={()=>this.handleInsertClick()}>Insert</button>
                <p>{this.state.msg}</p>
            </div>
        )
     }
}
import React from "react";

export class Toolbar extends React.Component
{
       constructor(){
          super();
       }
       render(){
         return(
            <nav className="p-3 bg-light d-flex justify-content-between border border-1">
                <div>{this.props.brandTitle}</div>
                <div>
                    {
                        this.props.menuItems.map(item=><span className="mx-4" key={item}>{item}</span>)
                    }
                </div>
                <div>
                    <span className="bi bi-person"></span>
                    <span className="bi mx-3 bi-cart4"></span>
                </div>
            </nav>
         )
       }
}
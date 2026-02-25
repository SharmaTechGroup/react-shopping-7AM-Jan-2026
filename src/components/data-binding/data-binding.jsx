
import { useEffect, useState } from "react"
import moment from "moment";

export function DataBinding(){

          const [now] = useState(new Date());        
    
          useEffect(()=>{
                
          },[])

    return(
        <div className="container-fluid">
            <h1>Data Binding</h1>
            { moment(now).format('dddd DD, MMMM YYYY') }
        </div>
    )
}
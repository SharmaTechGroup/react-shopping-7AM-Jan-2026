
import { useState } from "react"
import { DataGrid } from "../../controlled-components/datagrid"

export function ControlledDemo(){

    const [employees] = useState([{FirstName:'Raj', LastName:'Kumar', Designation:'Manager', Salary:50000},{FirstName:'Rakesh', LastName:'Kumar', Designation:'Clerk', Salary:20000}])
    const [products] = useState([{Name:'TV', Price:30500}, {Name:'Mobile', Price: 13000}, {Name:'Watch', Price: 5000}]);
    return(
        <div className="container-fluid">
            <DataGrid theme='table-dark' caption='Employee Details' data={employees} />
            
            <DataGrid width='w-50' theme='table-warning' caption='Products - Update 2026 Feb' data={products} />
        </div>
    )
}
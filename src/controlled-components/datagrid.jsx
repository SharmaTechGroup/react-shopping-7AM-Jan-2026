
export function DataGrid(props)
{
     return(
        <table className={`table table-hover caption-top ${props.theme} ${props.width}`}>
            <caption> {props.caption} </caption>
            <thead>
                <tr>
                    {
                        Object.keys(props.data[0]).map(key=>
                            <th key={key}>{key} 
                              <div className="dropdown d-inline mx-2">
                                 <button data-bs-toggle="dropdown" className="btn btn-light dropdown-toggle"></button>
                                 <ul className="dropdown-menu">
                                    <li className="dropdown-item"> <span className="bi bi-sort-alpha-down"> Sort Ascending </span> </li>
                                    <li className="dropdown-item"> <span className="bi bi-sort-alpha-up"> Sort Descending </span> </li>
                                    <li className="dropdown-item"> <span className="bi bi-funnel"> Filter </span> </li>
                                 </ul>
                              </div>
                            </th>
                        )
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(item=>
                        <tr key={item}>
                            {
                                Object.values(item).map(value=>
                                    <td key={value}>{value}</td>
                                )
                            }
                            <td>
                                <button className="bi bi-pen-fill btn btn-warning"></button>
                                <button className="bi bi-trash-fill btn btn-danger mx-2"></button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
     )
}
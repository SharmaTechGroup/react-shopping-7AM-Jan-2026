import { useMemo, useState } from "react";
import { useAPIData } from "../../hooks/use-apidata"
import { useSearchFilter } from "../../hooks/use-search-filter";


export function HookDemo(){

    let products = ['Men Fashion', 'Kids Fashion', 'Men Accessories', 'Kids Jeans'];
    const [str, setStr] = useState('');

    let data = useSearchFilter(products, str);

    function handleSearchChange(e){
        setStr(e.target.value);
    }

    return(
        <div className="container">
            <h2>Hook Demo</h2>
            <input type="text" onChange={handleSearchChange} placeholder="Search products" />
            <ul>
                {
                    data.map(product=><li key={product}>{product}</li>)
                }
            </ul>
        </div>
    )
}
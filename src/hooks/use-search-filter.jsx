import { useMemo, useState } from "react";


export function useSearchFilter(data, searchString){

    const filteredData = useMemo(()=>{
        return data.filter(item=> item.toLowerCase().includes(searchString.toLowerCase()));
    },[searchString])
    
    return filteredData;
}
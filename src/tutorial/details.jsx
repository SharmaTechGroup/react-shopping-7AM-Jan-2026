import { useParams } from "react-router-dom"

export function Details(){

    let params = useParams();

    return(
        <div>
            <h3>Details</h3>
            <dl>
                <dt>Product Id</dt>
                <dd>{params.id}</dd>
                <dt>Name</dt>
                <dd>{params.name}</dd>
                <dt>Price</dt>
                <dd>{params.price}</dd>
            </dl>
        </div>
    )
}
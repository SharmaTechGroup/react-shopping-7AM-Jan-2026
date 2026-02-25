
export function Navbar(props)
{
     if(props.orientation==="landscape"){
        return(
        <nav className={`d-flex flex-row my-2 justify-content-between align-items-center p-2 border border-1 border-secondary ${props.theme}`}>
            <div className="fw-bold fs-4">
                <span className={props.brandLogo}> </span>
                <span> {props.brandTitle} </span>
            </div>
            <div>
                {
                    props.menuItems.map(item=> <span key={item} className="mx-4">{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-person-fill"></span>
                <span className="bi bi-heart mx-2"></span>
                
            </div>
        </nav>
     )
     }
     else {
        return(
        <nav className={`d-flex ${props.theme} flex-column my-2 justify-content-between align-items-center p-2 border border-1 border-secondary`} style={{width:'200px', height:'400px'}}>
            <div className="fw-bold fs-4">
                <span className={props.brandLogo}> </span>
                <span> {props.brandTitle} </span>
            </div>
            <div className="d-flex flex-column">
                {
                    props.menuItems.map(item=> <span key={item} className="my-2">{item}</span>)
                }
            </div>
            <div>
                <span className="bi bi-person-fill"></span>
                <span className="bi bi-heart mx-2"></span>
                
            </div>
        </nav>
     )
     }
}
export function ButtonDemo(){

    function handleContextMenu(){
        document.oncontextmenu = () => {
            alert('Right Click Disabled');
            return false;
        }
    }

    return(
        <div className="container-fluid" style={{height:'100vh'}} onContextMenu={handleContextMenu}>
            <h2>Right click disable on this page.</h2>
        </div>
    )
}
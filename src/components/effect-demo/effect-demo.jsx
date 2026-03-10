import { useRef } from "react";


export function EffectDemo(){
    

    let nameRef = useRef('');
    let ageRef = useRef(0);

    function handleSubmit(e){
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(ageRef.current.value);
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" ref={nameRef} name="uname" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" ref={ageRef} name="age" /></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}
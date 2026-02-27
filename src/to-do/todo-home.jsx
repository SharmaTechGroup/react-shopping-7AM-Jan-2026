import { TodoLogin } from "./todo-login";
import { TodoRegister } from "./todo-register";

export function ToDoHome(){
    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-6">
                    <div className="w-50 ms-5">
                        <ul className="nav nav-tabs">
                        <li className="nav-item"> <a href="#login" data-bs-toggle="tab" className="nav-link active"> Login </a> </li>
                        <li className="nav-item"> <a href="#register" data-bs-toggle="tab" className="nav-link"> Register </a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane p-4 active" id="login">
                                <TodoLogin />
                            </div>
                            <div className="tab-pane p-4" id="register">
                                <TodoRegister />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                   <div className="w-50">
                        <div className="h3">
                            Master your workflow in minutes.
                        </div>
                        <div className="my-3">
                            Everything you need to stay organized, focused, and productive in one central hub.
                        </div>
                        <div>
                        <div className="my-3">
                            <div className="h4">Organize Tasks</div>
                            <div>Easily create, categorize, and prioritize your daily to-dos with simple drag-and-drop.</div>
                        </div>
                        <div>
                            <div className="h4">Plan Accordingly</div>
                            <div>Easily create, categorize, and prioritize your daily to-dos with simple drag-and-drop.</div>
                        </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
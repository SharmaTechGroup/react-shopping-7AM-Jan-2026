import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToDoHome } from "./todo-home";
import { TodoLogin } from "./todo-login";
import { TodoRegister } from "./todo-register";


export function ToDoIndex(){
    return(
        <div>
            <BrowserRouter>
                 <header className="p-4 d-flex justify-content-between align-items-center bg-light">
                    <div className="fs-4 text-primary fw-bold">
                        <span className="bi bi-pencil-square"> Task Manager</span>
                    </div>
                    <div className="fs-5 text-primary">
                        <span>Features</span>
                        <span className="mx-3">Pricing</span>
                        <span>About</span>
                    </div>
                 </header>
                 <section>
                    <Routes>
                         <Route path="/" element={<ToDoHome />} />
                         <Route path="login" element={<TodoLogin/>} />
                         <Route path="register" element={<TodoRegister />} />
                    </Routes>
                 </section>
            </BrowserRouter>
        </div>
    )
}
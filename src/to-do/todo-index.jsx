import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToDoHome } from "./todo-home";
import { TodoLogin } from "./todo-login";
import { TodoRegister } from "./todo-register";
import { ToDoDashboard } from "./todo-dashboard";
import { useCookies } from "react-cookie";
import { useEffect } from "react";


export function ToDoIndex(){

    const [cookies, setCookie, removeCookie] = useCookies(['user_id','user_name']);

    useEffect(()=>{
        
    },[cookies])

    return(
        <div>
            <BrowserRouter>
                 <header  className={`p-4 ${(cookies['user_id'])?'d-none':'d-flex'} justify-content-between align-items-center bg-light`}>
                    <div className="fs-4 text-primary fw-bold">
                        <span className="bi bi-pencil-square"> <Link to="/" className="text-decoration-none">Task Manager</Link> </span>
                    </div>
                    <div className="fs-5 text-primary">
                        <span>Features</span>
                        <span className="mx-3">Pricing</span>
                        <span>About</span>
                    </div>
                 </header>
                 <section className="p-2">
                    <Routes>
                         <Route path="/" element={<ToDoHome />} />
                         <Route path="login" element={<TodoLogin width='w-25' align='d-flex justify-content-center mt-4'/>} />
                         <Route path="register" element={<TodoRegister width='w-25' align='d-flex justify-content-center mt-4' />} />
                         <Route path="dashboard" element={<ToDoDashboard />} />
                    </Routes>
                 </section>
            </BrowserRouter>
        </div>
    )
}
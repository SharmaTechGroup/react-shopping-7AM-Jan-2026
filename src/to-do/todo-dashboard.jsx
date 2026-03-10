import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, Outlet, useNavigate } from "react-router-dom";
import store from "../store/store";


export function ToDoDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies(['user_id','user_name']);
    const [getString , setString] = useState('');
    const [sendString, setSendString] = useState('');
    
    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('user_id');
        removeCookie('user_name');
        navigate('/');
    }

    function GetSearchString(e){
        setString(e.target.value);
    }
    function SendSearchString(){
        setSendString(getString);
    }

    useEffect(()=>{

        

    },[store])

    return(
        <div className="row mt-4 ps-3">
            <div className="col-2">
                <div className="mt-4">
                    <div className="fw-bold fs-5"> Hello ! {cookies['user_name']}</div>
                </div>
                <div className="my-4">
                    <span className="bi bi-calendar-date"> Calendar </span>
                </div>
                <div>
                    <span className="bi bi-pencil-square"> Tasks </span>
                </div>
                <div className="my-4">
                    <span className="bi bi-folder"> Projects </span>
                </div>
                <div>
                    <span className="bi bi-gear"> Settings </span>
                </div>
            </div>
            <div className="col-10">
                <div className="d-flex bg-light p-2 mt-3 align-items-center justify-content-between">
                    <div className="fs-4 fw-bold">
                         Dasboard
                    </div>
                    <div>
                        <div className="input-group">
                            <input onChange={GetSearchString} className="form-control" type="text" placeholder="Search appointments" />
                            <button onClick={SendSearchString} className="btn btn-dark bi bi-search"></button>
                        </div>
                    </div>
                    <div>
                        <Link to="add-appointment" className="btn btn-primary mx-2 bi bi-calendar-date-fill"> New Appointment</Link>
                        <button onClick={handleSignout} className="btn btn-link bi bi-person text-decoration-none"> Signout</button>
                    </div>
                </div>

                <div className="bg-light d-flex justify-content-between p-4 mt-4">
                    <div className="input-group">
                        <div>
                        <select className="form-select" style={{width:'200px'}}>
                            <option>Sort</option>
                        </select>
                        </div>
                        <div className="mx-4">
                            <select className="form-select" style={{width:'200px'}}>
                                <option>Date</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button data-bs-target="#shared" data-bs-toggle="offcanvas" className="btn btn-primary position-relative"> <span className="bi bi-share-fill"> <span className="badge bg-dark rounded rounded-circle position-absolute"> {store.getState().sharedAppointmentsCount}</span></span> </button>
                        <div className="offcanvas offcanvas-end" id="shared">
                            <div className="offcanvas-header">
                                <h4>Shared Appointments</h4>
                                <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                {
                                    store.getState().sharedAppointments.map(appointment=><div className="my-2" key={appointment.id}>{appointment.title} [{appointment.user_id}]</div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                     <Outlet context={sendString} />
                </div>
            </div>
        </div>
    )
}
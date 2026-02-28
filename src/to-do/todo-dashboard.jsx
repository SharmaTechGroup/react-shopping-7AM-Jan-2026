import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";


export function ToDoDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies(['user_id','user_name']);
    const [appointments, setAppointments] = useState([{title:null, description:null, date:new Date(), user_id:null}]);
    let navigate = useNavigate();

    function handleSignout(){
        removeCookie('user_id');
        removeCookie('user_name');
        navigate('/');
    }

    function LoadAppointments(){
        axios.get(`http://localhost:3000/appointments`)
        .then(response=>{
             let records = response.data.filter(appointment=> appointment.user_id===cookies['user_id']);
             setAppointments(records);
        })
    }

    useEffect(()=>{

        LoadAppointments();

    },[])

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
                            <input className="form-control" type="text" placeholder="Search appointments" />
                            <button className="btn btn-dark bi bi-search"></button>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2 bi bi-calendar-date-fill"> New Appointment</button>
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
                        <span>Count</span>
                    </div>
                </div>
                <div className="mt-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map(appointment=>
                                    <tr key={appointment.title}>
                                        <td>{appointment.title}</td>
                                        <td>{appointment.description}</td>
                                        <td>{moment(appointment.date).format('dddd MMMM yyyy')}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
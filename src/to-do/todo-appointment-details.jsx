import { useCookies } from "react-cookie"
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export function ToDoAppointmentDetails(){

    const [cookies, setCookie, removeCookie] = useCookies(['user_id','user_name']);
    const [appointments, setAppointments] = useState([{id:null, title:null, description:null, date:new Date(), user_id:null}]);

    

    function LoadAppointments(){
        axios.get(`http://localhost:3000/appointments`)
        .then(response=>{
             let records = response.data.filter(appointment=> appointment.user_id===cookies['user_id']);
             setAppointments(records);
        })
    }

    function handleDeleteClick(id){
        let choice = confirm('Are you sure?\nWant to Delete?');
        if(choice===true){
                axios.delete(`http://localhost:3000/appointments/${id}`)
                .then(()=>{
                    console.log('deleted..');
                })
                alert('Deleted Successfully..');       
        }
    }

    useEffect(()=>{
         LoadAppointments();
        
    },[appointments, cookies])

    return(
        <>
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
                                        <td>{moment(appointment.date).format('dddd DD, MMMM yyyy')}</td>
                                        <td>
                                            <Link to={`/dashboard/edit-appointment/${appointment.id}`} className="btn btn-warning bi bi-pen"> </Link>
                                            <button onClick={()=>{ handleDeleteClick(appointment.id) }}  className="btn btn-danger bi bi-trash mx-2"></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

        </>
    )
}
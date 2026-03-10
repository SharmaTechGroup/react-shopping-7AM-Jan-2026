import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    sharedAppointments: [],
    sharedAppointmentsCount: 0
}

const TaskSlicer = createSlice({
    name: 'TaskSlicer',
    initialState,
    reducers: {
         addToShared: (state, action)=>{
             state.sharedAppointments.push(action.payload);
             state.sharedAppointmentsCount = state.sharedAppointments.length;
         }
    }
})
export const { addToShared } = TaskSlicer.actions;
export default TaskSlicer.reducer;

import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "../slicers/task-slicer";


export default configureStore({
    reducer: TaskSlicer
})
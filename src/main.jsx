import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './components/login/login.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { DataBinding } from './components/data-binding/data-binding.jsx'
import { Flipkart } from './components/flipkart/flipkart.jsx'
import { Shopping } from './components/shopping/shopping.jsx'
import { EventDemo } from './components/event-demo/event-demo.jsx'
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx'
import { MouseMove } from './components/mouse-move/mouse-move.jsx'
import { KeyDemo } from './components/key-demo/key-demo.jsx'
import { ButtonDemo } from './components/button-demo/button-demo.jsx'
import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx'
import { WeatherApp } from './components/weather-app/weather-app.jsx'
import { DebounceDemo } from './components/debounce/debounce-demo.jsx'
import { ThrottleDemo } from './components/throttle-demo/throttle-demo.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { FormDemo } from './components/form-demo/form-demo.jsx'
import { FormikDemo } from './components/formik-demo/formik-demo.jsx'
import { YupDemo } from './components/yup-demo/yup-demo.jsx'
import { FormikComponent } from './components/formik-component/formik-component.jsx'
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo.jsx'
import { ConditionDemo } from './components/condition-demo/condition-demo.jsx'
import { ControlledDemo } from './components/controlled-demo/controlled-demo.jsx'
import { ContextDemo } from './components/context-demo/context-demo.jsx'
import { FakestoreIndex } from './fakestore/fakestore-index.jsx'
import { MemoDemo } from './components/memo-demo/memo-demo.jsx'
import { TutorialIndex } from './tutorial/tutorial-index.jsx'
import { ShoppingIndex } from './shopping/shopping-index.jsx'
import { CookiesProvider } from 'react-cookie'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { MUIDemo } from './components/mui-demo/mui-demo.jsx'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ToDoIndex } from './to-do/todo-index.jsx'

createRoot(document.getElementById('root')).render(
  
    <CookiesProvider>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ToDoIndex />
       </LocalizationProvider>
    </CookiesProvider>
  
)

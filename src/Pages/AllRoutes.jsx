import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'
import Login from './Login'
import Homepage from '../Components/Homepage/Homepage'
const AllRoutes = () => 
{
  return (
    <>
    <Routes>
            <Route path = "/" element = {<Homepage/>} />
            <Route path = "/login" element = {<Login />} />
            <Route path = "/signAuth" element = {<SignUp/>} />
    </Routes>
   </>
  )
}
export default AllRoutes
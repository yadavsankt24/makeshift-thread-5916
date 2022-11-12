import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Components/Homepage/Homepage'
import SignUp from './SignUp'

const AllRoutes = () => 
{
  return (
    <>
    <Routes>
    <Route path = "/" element = {<SignUp/>} />
            <Route path = "/login" element = {<Login />} />
            {/* <Route path = "/signAuth" element = {<SignUp/>} /> */}
    </Routes>
   </>
  )
}
export default AllRoutes
import React from 'react'
import {Routes,Route} from "react-router-dom"
import SignUp from './SignUp'

const AllRoutes = () => 
{
  return (
    <>
    <Routes>
            <Route path = "/" element = {<SignUp/>} />

            {/* <Route path = "/signAuth" element = {<SignUp/>} /> */}
    </Routes>
   </>
  )
}
export default AllRoutes
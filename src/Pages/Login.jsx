/* eslint-disable no-undef */
// import React, {useState,useContext} from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button
  } from '@chakra-ui/react';

// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import { Authcontext } from "../Context/AuthContextProvider";
// import { ACTION_TYPE } from "../Context/action";
export default Login 
function Login() 
{
//   const[email,setEmail] = useState("")
//   const[password,setPassword] = useState("")
//   const Navigate = useNavigate();
//   const { state, dispatch } = useContext(Authcontext);
//   const { isLoading } = state;
//    const handleSubmit = (e)=>
//  {
//     e.preventDefault();
//     dispatch({ type: ACTION_TYPE.LOGIN_REQUEST });
//    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjtxI56rKMb3agEhqWfWMYguQhRvFEI94",
//     {
//       email:email,
//       password:password,
//       returnSecureToken:true,
//     })
//     .then((res)=>
//     {
//       console.log("res",res)
//       dispatch({ type: ACTION_TYPE.LOGIN_SUCCESS, payload: res.data.idToken});
//       localStorage.setItem("user", res.data.idToken);
//       Navigate("/");
//       setEmail("")
//       setPassword("")
//     })
//     .catch(err=>{
//       dispatch({ type: ACTION_TYPE.LOGIN_FAILURE});
//       alert("Something went wrong. please refresh.");
//     })
//  }
    return (
        <Flex width="full" align="center" justifyContent="center" mt={10} color="slategray">
          <Box  p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="pink">
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form  isRequired>
                <FormControl  isRequired>
                  <FormLabel color="red" >Email</FormLabel>
                  <Input  
                  type="email"
                  
                  placeholder="Email Address" />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel color="red" >Password</FormLabel>
                  <Input 
                 
                   type="password" 
                   placeholder="Enter Password" />
                </FormControl>
                <Button colorScheme="teal"  type="submit" variant="ghost" width="full" mt={4}>
                  SIGN IN
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      );
}
// eslint-disable-next-line import/no-anonymous-default-export
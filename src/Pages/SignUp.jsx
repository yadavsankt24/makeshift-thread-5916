// import React, {useState,useContext} from 'react'
import './Style.css'
import {Flex,Box,Heading,FormControl,FormLabel,Input,Button,Link,Image} from '@chakra-ui/react';
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";
// import { Authcontext } from "../Context/AuthContextProvider";
// import { ACTION_TYPE } from "../Context/action";
function SignUp() 
{
  //   const[email,setEmail] = useState("")
  //   const[password,setPassword] = useState("")

  //   const Navigate = useNavigate();
    
  //   const { state, dispatch } = useContext(Authcontext);
  //   const { isLoading } = state;
  //    console.log(`Email :`,email)
  //    console.log(`Password :`,password)

  //    const handleSubmit = (e)=>
  //  {
  //     e.preventDefault();
  //     dispatch({ type: ACTION_TYPE.SIGN_UP_REQUEST });
  //    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjtxI56rKMb3agEhqWfWMYguQhRvFEI94",
  //     {
  //       email:email,
  //       password:password,
  //       returnSecureToken:true,
  //     })
  //     .then((res)=>
  //     {
  //       dispatch({ type: ACTION_TYPE.SIGN_UP_SUCCESS, payload: res.data });
  //       localStorage.setItem("user", res.data.idToken);
  //       Navigate("/login");
  //       console.log("res",res)
  //       setEmail("")
  //       setPassword("")
  //     })
  //     .catch(err=>{
  //       dispatch({ type: ACTION_TYPE.SIGN_UP_FAILURE});
  //       alert("Something went wrong. please refresh.");
  //     })
  //  }
   
    return (
        <div className="signup-optimus">
        <div>
        <Link href="/">
       <Image src="data:image/png;base64,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" width="160px" height="80px" margin="auto" alt="Matrix"  />
      </Link> 
        </div>
        <Flex align="center" justifyContent="center" mt={10}>
          <Box  p={8} maxWidth="500px" borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
              <Heading>Create your account below to get started.</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form>
                <FormControl  isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input  
                  type="email"
                 
                  placeholder="Email Address" />
                </FormControl>
                <FormControl mt={6}>
                  <FormLabel>Password</FormLabel>
                  <Input 
                 
                  type="password" 
                  placeholder="Create Password" />
                </FormControl>
                <Button color="black" type="submit" variant="ghost" width="full" mt={4}>
                  Sign Up For Free
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
        </div>
      );
}
export default SignUp

import {useState} from 'react';
import { FormControl,FormGroup,InputLabel,Input, Typography,Button,styled,Tooltip} from "@mui/material"
//import { Container } from "@mui/system";

import { addUser  } from '../service/api';

import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup) `
        width:50%;
        margin: 5% auto 0%  ;
        & > div {margin:20px;
        }`

const initialValues= {
    firstname:" ",
    lastname:" ",
    email:" ",
    phone:" ",
    department:" "

}


const AddEmp = () => {
const [user,setUser] = useState(initialValues)
const Navigate= useNavigate();
 
const onValueChange = (e) =>{
//onsole.log("hello",e.target.name , e.target.value);
    setUser({ ...user, [e.target.name] : e.target.value});
    console.log(user);
}

const addUserDetails =async ()=> {
    await addUser(user);
    Navigate('/all');

}

    return (
       <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel  >First Name</InputLabel>

                 <Input onChange={(e)=> onValueChange(e)} name="firstname"/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="lastname"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>Department</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="department"/>
            </FormControl>

            <FormControl>
            
                <Button onClick={() => addUserDetails()} variant="contained">  Add Employee</Button>

  

            </FormControl>


       </Container>
    )
}

export default AddEmp;
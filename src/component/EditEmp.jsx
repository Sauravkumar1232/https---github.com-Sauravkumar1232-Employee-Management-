
import {useState,useEffect} from 'react';
import { FormControl,FormGroup,InputLabel,Input, Typography,Button,styled,Tooltip} from "@mui/material"
//import { Container } from "@mui/system";

import { editUser, getUser  } from '../service/api';

import {useNavigate,useParams} from 'react-router-dom';

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


const EditEmp = () => {
const [user,setUser] = useState(initialValues)
const Navigate= useNavigate();
const {id}=useParams();

useEffect(()=>{
    getUserData(id);
    //console.log(response);

},[])

const getUserData= async() =>{
    let response= await getUser(id);
    setUser(response.data);
}

 
const onValueChange = (e) =>{
//onsole.log("hello",e.target.name , e.target.value);
    setUser({ ...user, [e.target.name] : e.target.value});
    console.log(user);
}

const addUserDetails =async ()=> {
    await editUser(user,id);
    Navigate('/all');

}

    return (
       <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel  >First Name</InputLabel>

                 <Input onChange={(e)=> onValueChange(e)} name="firstname" value={user.firstname}/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="lastname" value={user.lastname} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="email"  value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <InputLabel>Department</InputLabel> <Input onChange={(e)=> onValueChange(e)} name="department"  value={user.department}/>
            </FormControl>

            <FormControl>
            
                <Button onClick={() => addUserDetails()} variant="contained"> Add Employee</Button>

  

            </FormControl>


       </Container>
    )
}

export default EditEmp;
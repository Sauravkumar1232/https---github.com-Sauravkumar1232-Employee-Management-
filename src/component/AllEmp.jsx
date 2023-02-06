import { useEffect, useState} from 'react';

import {Table,TableBody, TableCell, TableHead, TableRow , styled,Button} from "@mui/material";
import {getUsers,deleteUser} from '../service/api';
import { useResolvedPath } from 'react-router-dom';
import { margin } from '@mui/system';

import { Link } from 'react-router-dom';  //to give finctionality a simple button to route button

const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
    `

    const Trow = styled(TableRow)`
    background:#000;
    & > th{
        color:#fff;
        font-size:20px;
    }
    
    `


    const Tbody = styled(TableRow)`
   
    & > th{
        color:#fff;
        font-size:20px;
    }
    
    `
const AllEmp= ()=>{
    
    const [user, setUsers]= useState([]);

    useEffect(() => {
        getUserDetails();
    },[])

    const getUserDetails  = async () =>{
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }


    const deleteUserData = async (id)=>{
        await deleteUser(id);
        getUserDetails();
    }


    return (
        <StyledTable>
            <TableHead>
                <Trow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell></TableCell>
                </Trow>
            </TableHead>

            <TableBody>
               {
                user.map(user => (
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstname}</TableCell>
                        <TableCell>{user.lastname}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                            <Button variant="contained " color="primary"style={{marginRight: 10}} onClick={()=>deleteUserData(user.id)} >Delete</Button>
                            <Button variant='contained' color="secondary" component={Link} to ={`/edit/${user.id}`} > Edit </Button>  
                            {//convert button to route button
                             }
                             
                         </TableCell>

                        

                    </Tbody>
                ))
               }
            </TableBody>


        </StyledTable>


    )
}

export default AllEmp;
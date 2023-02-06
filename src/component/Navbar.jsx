
import {AppBar,Toolbar,Typography,styled} from '@mui/material';
import App from '../App';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
        background:#9575cd;
`
const Tab = styled(NavLink)`
        font:20px;
        margin-right:50px;
        color:inherit;
        text-decoration:none;
    `

const Navbar = ()=>{
    return (
       <Header position='static'>
        <Toolbar>
                <Tab to="/"> Employee Management</Tab>
                <Tab to="/all"> All Employee </Tab>
                <Tab to="/add"> Add New Employee </Tab>
        </Toolbar>
       </Header>
    )
}

export default Navbar
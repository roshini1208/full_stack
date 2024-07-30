import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Navbar.css';
import { AppBar, Container, Toolbar, Button, ButtonGroup, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Looo from './Looo.jpg';

const NavbarUser = () => {
    const Lo= useNavigate();
    const homeu = () => {
      Lo('/uhome');
    };
   
    const Allev = () => {
      Lo('/allev');
    };
   
    const mybook = () => {
      Lo('/mybook');
    };
   
    const sthome = () => {
      Lo('/sthome');
    };
   
  return (
    <div>
      <div className='imag69'>
        <div id='mynavbar'>
          <ul>
              <li></li>
            <li>
              <Stack>
                <Avatar
                  alt="Remy Sharp"
                  src={Looo}
                  sx={{ width: 70, height: 70 }}
                />
              </Stack>
            </li>
            <div id='mynavbars'>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <Button style={{  fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }}onClick={homeu}>
                  <h4>Home</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }}onClick={Allev}>
                  <h4>All Events</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '180px' }}onClick={mybook}>
                  <h4>Bookings form</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '170px' }}onClick={mybook}>
                  <h4>My Bookings</h4>
                </Button>
              </li>
              <li>
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '170px' }} >
                  <h4>My Payments</h4>
                </Button>
              </li>
             
             
              <li>
               
                
                {/* <button
                  className="inline-flex justify-center items-center text-brand hover:bg-brand-over gap-[3px] rounded-10 min-h-[40px] button-md py-2 px-10 hover:bg-white text-neutral-800"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  Log in/Sign up
                </button> */}
                <Button style={{ fontSize: '18px', color: 'black', height: '40px', borderColor: 'black', width: '150px' }} onClick={sthome}>
                  <h4>Logout</h4>
                </Button>
               
             </li>
            </div>
          </ul>
        </div>
      </div>
   
    </div>
  );
};

export default NavbarUser;

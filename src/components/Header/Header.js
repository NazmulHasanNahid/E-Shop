import React from 'react';
import { Navbar , Container , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { AiOutlineSearch , AiOutlineShoppingCart } from 'react-icons/ai';
import {HiOutlineUser} from 'react-icons/hi';


const Header = () => {
     return (
          <Navbar  expand="lg">
          <Container>
            <Navbar.Brand href="#home"> <span className='text-warning'>E</span>-Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/women">Women</Nav.Link>
                <Nav.Link as={Link} to="/kids">Kids</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/"><AiOutlineSearch size={20}/></Nav.Link>
                <Nav.Link as={Link} to="/"> <AiOutlineShoppingCart size={20}/></Nav.Link>
                <Nav.Link as={Link} to="/"><HiOutlineUser size={20}/></Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
     );
};

export default Header;
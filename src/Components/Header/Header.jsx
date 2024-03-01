import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='header '>
      <Container>
        <Navbar.Brand className='image' href="#home"><img src="https://i.postimg.cc/GpCqj5FS/logo.jpg"  alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav >
          <Nav >
            <Nav.Link className='text-light me-2' href=" ">Home <span className='ms-2'>/</span></Nav.Link>
            <Nav.Link className='text-light me-2' href=" ">My Booking <span className='ms-2'>/</span></Nav.Link>
            <Nav.Link className='text-light me-2' href=" ">Register<span className='ms-2'>/</span></Nav.Link>
            <Nav.Link className='text-light me-2' href=" ">Login <span className='ms-2'>/</span></Nav.Link>
            <Nav.Link className='text-light me-2' href=" ">contacts <span className='ms-2'>/</span></Nav.Link>
            <NavDropdown   className='text-light me-2' title="KWD" id="collapsible-nav-dropdown">
              <NavDropdown.Item   href="#action/3.1">KWD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           
            <Nav.Link className='text-light me-2' href=" "> يكتب  </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

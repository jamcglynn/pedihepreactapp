import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    Container, 
    Collapse, 
    NavbarToggler, 
    Nav, 
    NavItem, 
    Col 
} from 'reactstrap';
import logo from '../app/assets/logo.png';
import {NavLink} from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar className='navbar-expand-sm navbar-light sticky-top'>
            <Container>
                <NavbarBrand>
                    <Col xs='4' sm='3' md='2' className='align-self-center'>
                        <img src={logo} alt='PediHep logo' className='float-start' />
                        <h1 className='mt-1'>PediHEP</h1>
                        <p>A home exercise program generator specific for pediatric patient populations.</p>
                    </Col>
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/exerciselibrary'>Exercise Library</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
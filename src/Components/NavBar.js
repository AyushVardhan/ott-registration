import { Navbar } from "react-bootstrap";
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" className="bg-dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" style={{color: "white"}}>Talkies - Roll</Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mr-5">
                        <a href="/custom-search" style={{color: "white"}}>Search</a>
                    </Navbar.Text>
                    <Navbar.Text className="mr-5">
                        <Link to="section1" spy={true} smooth={true} duration={1000} style={{color: "white", cursor: "pointer"}}>Contact Us</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
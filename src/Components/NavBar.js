import { Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar fixed="top" className="bg-dark">
                <a className="navbar-brand" href="/">
                    <h5 style={{color: "white"}}>Talkies - Roll</h5>
                </a>
            </Navbar>
        </>
    );
}

export default NavBar;
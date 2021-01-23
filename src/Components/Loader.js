import { Row } from "react-bootstrap";

const Loader = () => {
    return(
        <>
            <Row className="justify-content-center" style={{marginTop: "100px"}}>
                <i className="fa fa-cog fa-spin fa-3x"/>
            </Row>
        </>
    );
}

export default Loader;
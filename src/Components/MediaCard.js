import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function MediaCard(props) {
    return(
        <Card className='mb-2'>
            <Card.Body>
                <Container>
                    <Card.Title>{props.mediaDetail.mediaName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.mediaDetail.synopsis}</Card.Subtitle>
                    <br/>
                    <Row className='mb-1'>
                        <Col><b><i>Genre</i> : </b>{props.mediaDetail.genres}</Col>
                        <Col><b><i>Language</i> : </b>{props.mediaDetail.language}</Col>
                    </Row>
                    <Row className='mb-1'>
                        <Col><b><i>Director Name</i> : </b>{props.mediaDetail.directorName}</Col>
                        <Col><b><i>Release Date</i> : </b>{props.mediaDetail.releaseDate}</Col>
                    </Row>
                    <Row className='mb-1'>
                        <Col><b><i>Cast</i> : </b>{props.mediaDetail.cast}</Col>
                        <Col><b><i>Platform</i> : </b>{props.mediaDetail.platform}</Col>                            
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default MediaCard;
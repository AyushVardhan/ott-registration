import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    return (
        <>
            <Container fluid='md'>
                <Row className='justify-content-center mt-3 mb-3'>
                    <h2>Registration page !!</h2>                    
                </Row>

                <Form>
                    <Form.Group controlId="formMultimediaName">
                        <Form.Label>Multimedia name/title</Form.Label>
                        <Form.Control type="text" placeholder="Enter name of movies, tv-show or web-series" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formDirectorName">
                            <Form.Label>Director </Form.Label>
                            <Form.Control type="text" placeholder="Enter director name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formReleaseDate">
                            <Form.Label>Release date </Form.Label>
                            <Form.Control type="date" placeholder="Enter Release date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formSynopsis">
                        <Form.Label>Synopsis </Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder="A brief summary" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formMediaLanguage">
                            <Row>
                                <Form.Label className='ml-3 mr-2'>Language </Form.Label>
                                <Form.Text className="text-muted">
                                    (5 languages available to register!)
                                </Form.Text>
                            </Row>

                            <Form.Control as="select" multiple>
                                <option>Hindi</option>
                                <option>English</option>
                                <option>Tamil</option>
                                <option>Marathi</option>
                                <option>Kannada</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMediaPlatforms">
                            <Form.Label>Platform </Form.Label>
                            <Form.Control as="select" multiple>
                                <option>Zee 5</option>
                                <option>Sony Liv</option>
                                <option>Netflix</option>
                                <option>Amazon Prime</option>
                                <option>Hotstar Disney</option>
                                <option>Voot</option>
                                <option>Alt Balaji</option>
                            </Form.Control>
                        </Form.Group>                        
                    </Form.Row>

                    <Form.Group controlId="formCastNames">
                            <Form.Label>Cast </Form.Label>
                            <Form.Control type="text" placeholder="Enter director name here" />
                    </Form.Group>

                    <Form.Group controlId="formMediaGenre">
                        <Form.Label>Genres </Form.Label>
                        <Form.Control type="text" placeholder="Genres/Category of entertainment conent" />
                    </Form.Group>

                    <Form.Row className='justify-content-center mt-3 mb-3'>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>                
            </Container>
        </>
    );
}

export default Register;
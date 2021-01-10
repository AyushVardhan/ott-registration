import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const languageAvailable = ['Hindi', 'English'];

function Register(props) {

    const [mediaDetails, setMediaDetails] = useState({ Name: '', Director: '', ReleaseDate: '', Synopsis: '', Language: '', Platform: '', Cast: '', Genres: '' }); 
    
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleLanguageSelect = function(selectedItems) {
        const flavors = [];
        for (let i=0; i<selectedItems.length; i++) {
            flavors.push(selectedItems[i].value);
        }
        setSelectedLanguages(flavors);
    }

    const [selectedPlatform, setSelectedPlatform] = useState([]);

    const handlePlatformSelect = function(selectedItems) {
        const flavors = [];
        for (let i=0; i<selectedItems.length; i++) {
            flavors.push(selectedItems[i].value);
        }
        setSelectedPlatform(flavors);
    }

    const saveMedia = (e) => {  
        e.preventDefault();
        console.log(" Name : " + mediaDetails.Name + " Director : " + mediaDetails.Director + " ReleaseDate : " + mediaDetails.ReleaseDate + 
        " Synopsis : " + mediaDetails.Synopsis + " Language : " + selectedLanguages + " Platform : " + selectedPlatform + 
        " Cast : " + mediaDetails.Cast + " Genres : " + mediaDetails.Genres);
    };

    const onChange = (e) => {
        e.persist();  
        setMediaDetails({...mediaDetails, [e.target.name]: e.target.value});  
    }

    return (
        <>
            <Container fluid='md'>
                <Row className='justify-content-center mt-3 mb-3'>
                    <h2>Registration page !!</h2>                    
                </Row>

                <Form>
                    <Form.Group controlId="formMultimediaName">
                        <Form.Label>Multimedia name/title</Form.Label>
                        <Form.Control type="text" name="Name" placeholder="Enter name of movies, tv-show or web-series" value={mediaDetails.Name} onChange={onChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formDirectorName">
                            <Form.Label>Director </Form.Label>
                            <Form.Control type="text" name="Director" placeholder="Enter director name" value={mediaDetails.Director} onChange={onChange}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formReleaseDate">
                            <Form.Label>Release date </Form.Label>
                            <Form.Control type="date" name="ReleaseDate" placeholder="Enter Release date" value={mediaDetails.ReleaseDate} onChange={onChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formSynopsis">
                        <Form.Label>Synopsis </Form.Label>
                        <Form.Control as="textarea" name="Synopsis" rows={2} placeholder="A brief summary" value={mediaDetails.Synopsis} onChange={onChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formMediaLanguage">
                            <Row>
                                <Form.Label className='ml-3 mr-2'>Language </Form.Label>
                                <Form.Text className="text-muted">
                                    (5 languages available to register!)
                                </Form.Text>
                            </Row>
                            
                            <Form.Control as="select" multiple value={selectedLanguages} onChange={(e)=> {handleLanguageSelect(e.target.selectedOptions)}}>
                                <option>Hindi</option>
                                <option>English</option>
                                <option>Tamil</option>
                                <option>Marathi</option>
                                <option>Kannada</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMediaPlatforms">
                            <Form.Label>Platform </Form.Label>
                            <Form.Control as="select" multiple value={selectedPlatform} onChange={(e)=> {handlePlatformSelect(e.target.selectedOptions)}}>
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
                            <Form.Control type="text" name="Cast" placeholder="Enter director name here" value={mediaDetails.Cast} onChange={onChange}/>
                    </Form.Group>

                    <Form.Group controlId="formMediaGenre">
                        <Form.Label>Genres </Form.Label>
                        <Form.Control type="text" name="Genres" placeholder="Genres/Category of entertainment conent" value={mediaDetails.Genres} onChange={onChange}/>
                    </Form.Group>

                    <Form.Row className='justify-content-center mt-3 mb-3' onClick={saveMedia}>
                        <Button variant="primary" type="button">
                            Submit
                        </Button>
                    </Form.Row>
                </Form>                
            </Container>
        </>
    );
}

export default Register;
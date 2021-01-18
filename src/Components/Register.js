import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import configData from "./config.json";

const languageAvailable = ['Hindi', 'English', 'Tamil', 'Marathi', 'Bengali', 'Kannada','Telgu'];
const platformsAvailable = ['Zee 5', 'Sony Liv', 'Netflix', 'Amazon Prime', 'Hotstar Disney', 'Voot', 'Alt Balaji', 'MX Player', 'Theatre'];

function Register(props) {

    const [mediaDetails, setMediaDetails] = useState({ Name: '', Director: '', ReleaseDate: '', Synopsis: '', Language: '', Platform: '', Cast: '', Genres: '' }); 
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedPlatform, setSelectedPlatform] = useState([]);

    const handleLanguageSelect = function(selectedItems) {
        const flavors = [];
        for (let i=0; i<selectedItems.length; i++) {
            flavors.push(selectedItems[i].value);
        }
        setSelectedLanguages(flavors);
    }

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

        const url = configData.SERVER_URL+`/registerMedia`;
        console.log("Making call to : " + url);
        fetch(
            url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                 multimediaName: mediaDetails.Name,
                 directorName: mediaDetails.Director,
                 releaseDate: mediaDetails.ReleaseDate,
                 synopsis: mediaDetails.Synopsis,
                 language: selectedLanguages,
                 platform: selectedPlatform,
                 cast: mediaDetails.Cast,
                 genres: mediaDetails.Genres
                }),
        })
        .then(res => {
            if (res.ok) {
                console.log("Registration done successfully!");
                setMediaDetails({ Name: '', Director: '', ReleaseDate: '', Synopsis: '', Language: '', Platform: '', Cast: '', Genres: '' });
                setSelectedLanguages([]);
                setSelectedPlatform([]);            
            }
        })
        .catch(error => console.log(error));
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
                                {languageAvailable.map(language => <option key={language}>{language}</option>)}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMediaPlatforms">
                            <Form.Label>Platform </Form.Label>
                            <Form.Control as="select" multiple value={selectedPlatform} onChange={(e)=> {handlePlatformSelect(e.target.selectedOptions)}}>
                                {platformsAvailable.map(platform => <option key={platform}>{platform}</option>)}
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
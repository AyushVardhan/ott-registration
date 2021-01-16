import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Home() {

    const mediaList = [
        {
            "mediaName": "Bolo Hau",
            "directorName": "Tarun Dhanrajgir",
            "releaseDate": "15 Jan 2021",
            "synopsis": "Bolo Hau is a Bollywood drama movie, directed by Tarun Dhanrajgir. The cast of Bolo Hau includes Jahnavi Dhanrajgir,Ankit Rathi.",
            "language": "Hindi",
            "platform": "Theatre",
            "cast": "Jahnavi Dhanrajgir, Ankit Rathi",
            "genres": "Drama Romance"
        },
        {
            "mediaName": "One Night in Miami",
            "directorName": "Regina King",
            "releaseDate": "15 Jan 2021",
            "synopsis": "2020 American drama film about a fictionalized meeting of Malcolm X, Muhammad Ali, Jim Brown, and Sam Cooke in a Miami hotel room in February 1964, celebrating Ali's surprise title win over Sonny Liston.",
            "language": "English",
            "platform": "Amazon Prime",
            "cast": "Kingsley Ben-Adir, Eli Goree, Aldis Hodge, Leslie Odom Jr",
            "genres": "Biopic Drama"
        }
    ];

    const MediaCard = () => {
        return(
            <Card className='mb-2'>
                <Card.Body>
                    <Row>
                        <Card.Title>{mediaList[0].mediaName}</Card.Title>
                    </Row>
                    <Card.Subtitle className="mb-2 text-muted">Director : {mediaList[0].directorName}</Card.Subtitle>
                    <br/>
                    <Card.Text>Synopsis : {mediaList[0].synopsis}</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return (
        <>
            <Container fluid='md' className='mt-5'>
                <div>
                    <MediaCard/>
                </div>
            </Container>
        </>
    );
}

export default Home;

    // const [data, setData] = useState("");
    // const apiResponse = async () => {
    //     let result = await fetch(
    //         `http://localhost:8080/home`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .catch(error => console.log(error));

    //     let text = await result.text();
    //     setData(text);
    // }
    // apiResponse();
    // console.log("here : " + data);
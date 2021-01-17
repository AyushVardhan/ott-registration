import { Container } from "react-bootstrap";
import MediaCard from "./MediaCard";
import { useState } from 'react';

const mediaDet = [
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

function Home(props) {

    const [data, setData] = useState("");
    const apiResponse = async () => {
        let result = await fetch(
            `http://localhost:8080/getMedia?durationInDays=7`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .catch(error => console.log(error));

        let text = await result.text();
        setData(text);
    }
    apiResponse();
    console.log("here : " + data);

    return (
        <>
            <Container fluid='md' className='mt-5'>
                {mediaDet.map((media,index) => <MediaCard key={index} mediaDetail={media}/>)}
            </Container>
        </>
    );
}

export default Home;
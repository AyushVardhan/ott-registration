import {Row} from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Row className="justify-content-center"><h2>What's rolling here?</h2></Row>
            <Row className="mt-3">
                <p className="text-center">
                            Why to rush around multiple OTT & channels to find the entertainment that suits you the best. Whether its new season for TV series you like or new 
                            movie to watch that matches your genre or spending quality time on weekend. Be it Netflix, Amazon Prime, Hotstar, ZEE5, SonyLIV etc. It's all covered here for you.                    
                </p> 
            </Row>
            <Row className="justify-content-center mb-5">
                <p className="text-center">
                            If release date is re-scheduled, reflecting new date here might get delayed. Other than this, have a great time. Cheers!! 
                            <i className="fas fa-pizza-slice"> </i> <i className="fas fa-beer"> </i> <i className="fas fa-pizza-slice"> </i>
                </p> 
            </Row>
        </>
    );
}

export default About;
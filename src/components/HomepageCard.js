import { Card, CardImg, Container, CardBody, CardHeader } from 'reactstrap';

const HomepageCard = () => {
    return(
        <Container>
            <Card className='card text-center border-secondary'>
                <CardImg
                    width='100%'
                    src='src\app\assets\exercisehandout.jpg'
                    alt='Exercise handout'
                />
                <CardHeader>Browse Exercise Libraries</CardHeader>
                <CardBody>
                    <h3 className="card-text">Search by body part, development skill, or by keyword.</h3>
                    <p className="card-text">Explore curated exercises created by our team members or created by pediatric physical therapists just like you!</p>
                </CardBody>
            </Card>
            <Card className='card text-center border-secondary'>
                <CardImg 
                    width='100%'
                    src='src\app\assets\uploadyourown.jpg'
                    alt='Sample exercises'
                />
                <CardHeader>Upload Your Own Exercises</CardHeader>
                <CardBody>
                    <h3 className="card-text">Tailor your home exercise program to meet your needs.</h3>
                    <p className="card-text">Enable patients and their families to better understand exercise prescription when worded in your own terms.</p>
                </CardBody>
            </Card>
            <Card className='card text-center border-secondary'>
                <CardImg 
                    width='100%'
                    src='src\app\assets\ptoncomputer.jpg'
                    alt='Physical therapist accessing PediHEP on computer'
                />
                <CardHeader>View Your Saved Programs</CardHeader>
                <CardBody>
                    <h3 className="card-text">Enjoy quick access to previously saved programs.</h3>
                    <p className="card-text">Easy accessibility and editing allows you to cater to your patients' specific needs.</p>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomepageCard;
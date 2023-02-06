import HomepageCard from '../components/HomepageCard';
import HomepageCarousel from '../components/HomepageCarousel';
import { Container, Row, Col } from 'reactstrap';

const HomePage = () => {
    return (
        <>
            <Container>
                <Row className='row row-content'>
                    <HomepageCard />
                </Row>
                <Row className='row row-conent'>
                    <Col className='md-8 mx-auto text-center'>
                        <h3 className='pb-3 mt-3'>See what others are saying about PediHEP!</h3>
                    </Col>
                    <HomepageCarousel />
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
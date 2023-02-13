import HomepageCard from '../components/HomepageCard';
import HomepageCarousel from '../components/HomepageCarousel';
import { Container, Row, Col } from 'reactstrap';
import FeaturedSponsor from '../app/display/FeaturedSponsorCard';
import HomepageAlert from '../components/Alert';
import BlogCard from '../app/display/BlogCard';




const HomePage = () => {
    return (
        <Container>
            <HomepageAlert />
            <Row className='row row-content'>
                <HomepageCard />
            </Row>
            <Row className='row row-conent'>
                <Col className='md-8 mx-auto text-center'>
                    <h3 className='pb-3 mt-3'>See what others are saying about PediHEP!</h3>
                </Col>
                <HomepageCarousel />
            </Row>
            <Row className='row row-content'>
                <Col>
                    <h3 className='text-center'>Check out our blog for the latest advances in pediatric research!</h3>
                    <BlogCard />
                </Col>
                <Col>
                    <h3 className='text-center'>Check out our featured sponsor!</h3>
                    <FeaturedSponsor />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
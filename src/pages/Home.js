import HomepageCard from '../components/HomepageCard';
import HomepageCarousel from '../components/HomepageCarousel';
import { Container } from 'reactstrap';

const HomePage = () => {
    return (
        <Container>
            <HomepageCard />
            <HomepageCarousel />
        </Container>
    );
};

export default HomePage;
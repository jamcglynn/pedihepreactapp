import { selectFeaturedSponsor } from '../../features/sponsors/sponsorsSlice';
import { Row, Col } from 'reactstrap';
import FeaturedSponsorDisplayCard from './FeaturedSponsorDisplayCard.js';


const FeaturedSponsor = () => {
    const sponsor = [selectFeaturedSponsor()];

    return(
        <Row>
            {sponsor.map((item, idx) =>{
                return(
                    <Col md className='m-1' key={idx}>
                        <FeaturedSponsorDisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default FeaturedSponsor;
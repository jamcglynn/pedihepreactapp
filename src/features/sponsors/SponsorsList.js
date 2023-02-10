//import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Sponsor from '../../components/Sponsor';
//import { selectFeaturedSponsor } from '../sponsors/sponsorsSlice';
import { selectAllSponsors } from './sponsorsSlice';


const SponsorsList = () => {
    const sponsors = selectAllSponsors();

    return (
        <Col className='mt-4'>
            {sponsors.map((sponsor) => {
                return (
                    <div className='d-flex mb-5' key={sponsor.id}>
                        <Sponsor sponsor={sponsor} />
                    </div> 
                );
            })}
        </Col>
    );
};


export default SponsorsList;


import SubHeader from '../components/SubHeader';
import { Container, Row, Col } from 'reactstrap';
import juliamcglynn from '../app/assets/img/juliamcglynn.PNG';

const AboutPage = () => {
    return (
        <>
            <SubHeader current="About" />
            <Container>
                <Row className="media row row-content">
                    <Col className="media-body align-self-center">
                        <h1>About Us</h1>
                        <h2>Who We are</h2>
                        <p><strong>Julia McGlynn</strong>, creator of PediHEP, has been a practicing pediatric physical therapist for the past 6 years. She has experience in school, outpatient,
                            inpatient, and Early Intervention settings. Additionally, she is a Board-Certified Clinical Specialist in Pediatric Physical Therapy recognized
                            by the American Board of Physical Therapy Specialties. PediHEP was founded after Julia's frustration finding home exercise program generators tailored to pediatric clients.
                            She hopes this website can be a useful tool for fellow pediatric therapists to improve the efficiency of their practice by ensuring patient/family carryover and optimizing outcomes.</p>
                    </Col>
                    <Col>
                        <img src={juliamcglynn} alt="Julia McGlynn, creator of PediHEP" className="d-flex mr-3 img-thumbnail rounded d-block" />
                    </Col>
                </Row>
            </Container>
        </>

    )
};

export default AboutPage;
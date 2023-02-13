import SubHeader from '../components/SubHeader';
import SavedProgramsNav from '../components/SavedProgramsNavigation';
import { Container, Row } from 'reactstrap';


const MyProgramsPage = () => {
    return (
        <>
            <SubHeader current='My Programs' />
            <Container>
                <Row>
                    <SavedProgramsNav />
                </Row>
            </Container>
        </>
    );
};

export default MyProgramsPage;
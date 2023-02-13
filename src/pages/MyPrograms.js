import SubHeader from '../components/SubHeader';
import SavedProgramsNav from '../components/SavedProgramsNavigation';
import UploadExerciseForm from '../components/UploadExercise';
import { Container, Row } from 'reactstrap';


const MyProgramsPage = () => {
    return (
        <>
            <SubHeader current='My Programs' />
            <Container>
                <Row>
                    <h3>View Your Saved Programs</h3>
                    <SavedProgramsNav />
                </Row>
                <Row>
                    <h3>Upload Your Own Exercises</h3>
                    <UploadExerciseForm />
                </Row>
            </Container>
        </>
    );
};

export default MyProgramsPage;
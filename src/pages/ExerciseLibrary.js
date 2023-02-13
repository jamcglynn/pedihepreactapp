import SubHeader from '../components/SubHeader';
import ExerciseLibraryNav from '../components/ExerciseLibraryNav';
import { Container } from 'reactstrap';

const ExerciseLibrary = () => {
    return (
        <>
            <SubHeader current='Exercise Library'/>
            <Container>
                <ExerciseLibraryNav />
            </Container>
        </>
    )
};

export default ExerciseLibrary;

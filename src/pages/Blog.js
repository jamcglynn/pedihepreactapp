import SubHeader from '../components/SubHeader';
import BlogNav from '../components/BlogNav';
import { Container, Row } from 'reactstrap';

const BlogPage = () => {
    return (
        <>
            <SubHeader current='Blog' />
            <Container>
                <Row>
                    <BlogNav />
                </Row>
            </Container>
        </>
    );
};

export default BlogPage;
import SubHeader from '../components/SubHeader';
import ContactForm from '../components/ContactForm';
import { Container } from 'reactstrap';

const ContactPage = () => {
    return (
        <>
            <SubHeader current='Contact' />
            <Container>
                <ContactForm />
            </Container>
        </>
    )
};

export default ContactPage;
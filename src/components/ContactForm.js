import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return(
        <Formik
            initialValues={{ //JS inside JSX, JSX object inside
            firstName: '',
            lastName: '',
            email: '',
            feedback: '',
        }}
            onSubmit={handleSubmit}
            validate={validateContactForm} >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Field
                        name='firstName'
                        placeholder='First Name'
                        className='form-control' />
                    <Col md='10'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Field 
                        name='lastName'
                        placeholder='Last Name'
                        className='form-control' />
                    <Col md='10'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Field 
                        name='email'
                        placeholder='Email'
                        type='email'
                        className='form-control' />
                    <Col md='10'>

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Field 
                        name='feedback'
                        as='textarea'
                        rows='12'
                        className='form-control' />
                    <Col md='10'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10 }}>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
}

export default ContactForm;
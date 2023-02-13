import { Col, Form, Label, FormGroup } from 'reactstrap';
import { Formik, Field } from 'formik';

const UploadExerciseForm = () => {
    return(
        <Formik
            initialValues={{
                exerciseName: '',
                exerciseType: '',
                exercisePrescription:'',
        }} >
            <Form>
                <FormGroup row>
                    <Label htmlFor='exericseName' md='2'>
                        Exercise Name
                    </Label>
                    <Field  
                        name='exerciseName'
                        placeholder="Exercise Name"
                        className='form-control' />
                    <Col md='6'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='exerciseType' md='2'>
                        Exercise Type
                    </Label>
                    <Field
                        name='exerciseType'
                        placeholder="Exercise Type"
                        className='form-control' />
                    <Col md='6'>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='exercisePrescription' md='8'>
                        Exercise Prescrption
                    </Label>
                    <Field
                        name='exercisePrescription'
                        as='textarea'
                        rows='10'
                        className='form-control' />
                    <Col md='10'>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='exerciseImage'>
                        Exercise Image
                    </Label>
                    <Field  
                        name='exerciseImage'
                        type='file'
                        id='exerciseImage' 
                        className='d-flex'
                        />
                    <button type='submit'>Submit</button>
                </FormGroup>
            </Form>
        </Formik>
    );
}

export default UploadExerciseForm;

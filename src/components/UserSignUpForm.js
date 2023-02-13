import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from '../features/user/userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateUserSignUpForm } from '../utils/validateUserSignUpForm';

const UserSignUpForm = () => {
        const [signUpModalOpen, setSignUpModalOpen ] = useState(false);
    
        const currentUser = useSelector(selectCurrentUser);
    
        const dispatch = useDispatch();
    
        const handleSignUp = (values) => {
            const currentUser = {
                id: Date.now(),
                firstName: values.firstName,
                lastName: values.lastName,
                licenseState: values.licenseState,
                licenseNumber: values.licenseNumber,
                username: values.username,
                password: values.password
            };
            dispatch(setCurrentUser(currentUser));
            setSignUpModalOpen(false);
        };

        return (
            <>
                <span className ='navbar-text ml-auto'>
                    {currentUser ? (
                        <div style={{ width: '4rem', height: '4rem' }}>
                            <img
                                src={currentUser.avatar}
                                alt={'user'}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    ) : (
                        <Button
                            outline
                            onClick={() => setSignUpModalOpen(true)}
                            style={{ color: 'black', border: '1px solid black' }}
                        >
                            Sign Up
                        </Button>
                    )}
                </span>
                <Modal isOpen={signUpModalOpen}>
                    <ModalHeader toggle={() => setSignUpModalOpen(false)}>
                        Sign Up
                    </ModalHeader>
                    <ModalBody>
                        <Formik 
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                licenseState: '',
                                licenseNumber: '',
                                username: '', 
                                password:''}}
                            onSubmit={handleSignUp}
                            validate={validateUserSignUpForm}
                        >
                            <Form>
                                <FormGroup>
                                    <Label htmlFor='firstName'>
                                        First Name
                                    </Label>
                                    <Field
                                        id='firstName'
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='firstName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='lastName'>
                                        Last Name
                                    </Label>
                                    <Field
                                        id='lastName'
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='lastName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='licenseState'>
                                        License State
                                    </Label>
                                    <Field name="licenseState" component="select">
                                            <option selected>State of Licensure</option>
                                            <option value="Alabama">AL</option>
                                            <option value="Alaska">AK</option>
                                            <option value="Arizona">AZ</option>
                                            <option value="Arkansas">AR</option>
                                            <option value="California">CA</option>
                                            <option value="Colorado">CO</option>
                                            <option value="Connecticut">CT</option>
                                            <option value="Delaware">DE</option>
                                            <option value="Florida">FL</option>
                                            <option value="Georgia">GA</option>
                                            <option value="Hawaii">HI</option>
                                            <option value="Idaho">ID</option>
                                            <option value="Illinois">IL</option>
                                            <option value="Indiana">IN</option>
                                            <option value="Iowa">IA</option>
                                            <option value="Kansas">KS</option>
                                            <option value="Kentucky">KY</option>
                                            <option value="Louisiana">LA</option>
                                            <option value="Maine">ME</option>
                                            <option value="Maryland">MD</option>
                                            <option value="Massachusetts">MA</option>
                                            <option value="Michigan">MI</option>
                                            <option value="Minnesota">MN</option>
                                            <option value="Mississippi">MS</option>
                                            <option value="Missouri">MO</option>
                                            <option value="Montana">MT</option>
                                            <option value="Nebraska">NE</option>
                                            <option value="Nevada">NV</option>
                                            <option value="New Hampshire">NH</option>
                                            <option value="New Jersey">NJ</option>
                                            <option value="New Mexico">NM</option>
                                            <option value="New York">NY</option>
                                            <option value="North Carolina">NC</option>
                                            <option value="North Dakota">ND</option>
                                            <option value="Ohio">OH</option>
                                            <option value="Oklahoma">OK</option>
                                            <option value="Oregon">OR</option>
                                            <option value="Pennsylvania">PA</option>
                                            <option value="Rhode Island">RI</option>
                                            <option value="South Carolina">SC</option>
                                            <option value="South Dakota">SD</option>
                                            <option value="Tennessee">TN</option>
                                            <option value="Texas">TX</option>
                                            <option value="Utah">UT</option>
                                            <option value="Vermont">VT</option>
                                            <option value="Virginia">VA</option>
                                            <option value="Washington">WA</option>
                                            <option value="West Virginia">WV</option>
                                            <option value="Wisconsin">WI</option>
                                            <option value="Wyoming">WY</option>
                                    </Field>
                                    <ErrorMessage name='licenseState'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                    </FormGroup>
                                    <FormGroup>
                                    <Label htmlFor='licenseNumber'>
                                        License Number
                                    </Label>
                                    <Field
                                        id='licenseNumber'
                                        name='licenseNumber'
                                        placeholder='License Number'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='licenseNumber'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='username'>
                                        Username
                                    </Label>
                                    <Field
                                        id='username'
                                        name='username'
                                        placeholder='Username'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='username'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>
                                        Password
                                    </Label>
                                    <Field
                                        id='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='password'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </FormGroup>
                                <Button type='submit' color='primary'>
                                    Sign Up
                                </Button>
                            </Form>
                        </Formik>
                    </ModalBody>
                </Modal>
            </>
    );
}

export default UserSignUpForm;
export const validateUserSignUpForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName='Required';
    } else if (values.firstName.length > 15) {
        errors.firstName='Maximum of 15 characters allowed.';
    };
    if (!values.lastName) {
        errors.lastName ='Required';
    } else if (values.lastName.length > 20) {
        errors.lastName ='Maximum of 20 characters allowed.';
    };
    if (!values.licenseState) {
        errors.licenseState ='Required';
    };
    if(!values.licenseNumber) {
        errors.licenseNumber ='Required';
    };
    if (!values.username) {
        errors.username ='Required';
    } else if (values.username.length > 15) {
        errors.username='Maximum of 15 characters allowed.';
    };
    if (!values.password) {
        errors.password='Required';
    } else if (values.password.length < 8) {
        errors.password='Minimum of 8 characters required.';
    };
    return errors;
};


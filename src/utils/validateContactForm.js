export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName='Required';
    } else if (values.firstName > 15) {
        errors.firstName='Maximum of 15 characters allowed.';
    }
    if (!values.lastName) {
        errors.lastName='Required';
    } else if (values.lastName > 20) {
        errors.lastName='Maximum of 20 characters allowed.';
    }
    if (!values.email) {
        errors.email='Required';
    } else if (!values.email.includes('@')) {
        errors.email='Email should contain a @';
    }
    return errors;
};

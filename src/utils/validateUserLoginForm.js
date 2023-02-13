export const validateUserLoginForm = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username='Required';
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


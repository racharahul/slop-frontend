import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const signUpFormValidation = Yup.object().shape({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name should be longer"),
  registrationId: Yup.string()
    .required("Registration id is required")
    .min(3, "Registration id should be longer"),
  emailId: Yup.string()
    .required("EmailId is required")
    .email("EmailId is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be longer"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

const signInFormValidation = Yup.object().shape({
  emailId: Yup.string()
    .required("EmailId is required")
    .email("EmailId is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password should be longer"),
});

const { ValidationError } = Yup;

export { ValidationError, signUpFormValidation, signInFormValidation };

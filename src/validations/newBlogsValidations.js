import * as yup from 'yup';

export const validationSchema = yup.object({
    title: yup.string('Enter blog title').required('Title is required'),
    sub_title: yup.string('Enter sub-title'),
    quote: yup.string('Enter quote'),
    content: yup.string().required('Please add some content in mardown format.'),
    date_publish: yup.date('Please select publish date').required('Date is required').nullable('Please select date of publish'),
    status: yup.string('Please select blog status').required('Please select blog status'),
    author: yup.string('Please enter author name').required('Please enter author name'),
    author_mail: yup
        .string('Enter author\'s email')
        .email('Enter a valid email')
        .required('Email is required'),
        thumbnail: yup.mixed('Please upload thumbnail.').required('Thumbnail is required'),
});


/*
export const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .required('Email is required'),
    lastName: yup
        .string('Enter your last name')
        .required('Email is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    mobileNumber: yup.string('Enter your mobile number')
        .required('Mobile number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
    gender: yup
        .string('Please select value')
        .required('Gender is required'),
    dateOfBirth: yup
        .date('Please select your date of birth')
        .required('Date of birth is required')
        .nullable('Please select DOB'),
    addressLine1: yup
        .string('Enter your address')
        .required('Address line 1 is required')
        .max(50),
    addressLine2: yup
        .string('Enter your address')
        .max(50),
    addressLine3: yup
        .string('Enter your address')
        .max(50),
    city: yup
        .string('Enter your city')
        .required('City is required')
        .max(25),
    district: yup
        .string('Enter your district')
        .required('District is required')
        .max(25),
    state: yup
        .string('Enter your state')
        .required('State is required')
        .max(25),
    pincode: yup
        .string('Enter your pincode')
        .matches(/^[0-9]+$/, "Must be only digits")
        .required('Pincode is required')
        .min(6)
        .max(6)
}); */
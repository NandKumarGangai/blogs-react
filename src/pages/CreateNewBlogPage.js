import React from 'react';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import DateField from '../components/Atoms/DateField';
import InputTextField from '../components/Atoms/InputTextField';
import MarkDownEditor from '../components/Atoms/MarkDownEditor';
import SelectField from '../components/Atoms/SelectField';
import InputFile from '../components/Atoms/InputFile';

import Wrapper from './templates/HeaderWrapper';
import { validationSchema } from '../validations/newBlogsValidations';
import { APIS } from '../serviceCalls';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        flexDirection: 'column',
    },
    halfWidth: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    inputFile: {
        width: '50%',
        boxSizing: 'margin-box',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    formControl: {
        width: '100%'
    }
}));

const defaults = {
    title: '',
    sub_title: '',
    quote: '',
    content: '',
    date_publish: '',
    status: '',
    author: '',
    author_mail: '',
    thumbnail: ''
};

const defaultValues = {
    title: '',
    sub_title: '',
    quote: '',
    content: '',
    date_publish: '30-05-2021',
    status: 'published',
    author: 'Nandkumar Gangai',
    author_mail: 'nandkumargangai@gmail.com',
    thumbnail: ''
};

const CreateNewBlogPage = ({ history }) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            APIS.addNewBlog(values, history, resetForm);
        },
        enableReinitialize: true
    });

    return (
        <Wrapper admin={true} >
            <section>
                <form onSubmit={formik.handleSubmit} >
                    <Grid container spacing={3} className={classes.root}>
                        <Grid item md={12} xs={12}>
                            <Typography variant='h1'>
                                {'Create new blog'}
                            </Typography>
                            <hr />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <InputTextField
                                id='title'
                                label='Enter blog title'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <InputTextField
                                id='sub_title'
                                label='Enter sub title'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <InputTextField
                                id='quote'
                                label='Enter quote'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <MarkDownEditor
                                id='content'
                                name='content'
                                label='Blog content'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <DateField
                                id='date_publish'
                                name='date_publish'
                                label='Date of publish'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <SelectField
                                id='status'
                                name='status'
                                label='Status'
                                menuItems={[
                                    {
                                        value: 'draft',
                                        desc: 'Draft'
                                    },
                                    {
                                        value: 'published',
                                        desc: 'Published'
                                    }
                                ]}
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.inputFile}>
                            <InputFile
                                id='thumbnail'
                                name='thumbnail'
                                label='Add thumbnail'
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <InputTextField
                                id='author'
                                name='author'
                                label={`Enter author's full name`}
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.halfWidth}>
                            <InputTextField
                                id='author_mail'
                                name='author_mail'
                                label={`Enter author's email id`}
                                formik={formik}
                            />
                        </Grid>
                        <Grid item md={8} xs={12} className="flex-center">
                            <Button
                                type='submit'
                                fullWidth
                                variant='contained'
                                color='primary'
                                className={classes.saveBtn}
                            >
                                {'Save Profile'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </section>
        </Wrapper>
    )
}

export default withRouter(CreateNewBlogPage);

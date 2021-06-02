import React, { useContext } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { makeStyles } from '@material-ui/core/styles';

import { GlobalContext } from '../context/GlobalState';
import { useParams } from "react-router-dom";
import Wrapper from './templates/HeaderWrapper';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        width: '55%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    media: {
        height: 250,
    },
    btn: {
        textDecoration: 'none',
    }
}));

const BlogPage = () => {
    const classes = useStyles();

    const { title } = useParams();
    const { blog_posts = [] } = useContext(GlobalContext);
    const blog = blog_posts.find(blog => blog._id === title);

    return (
        <Wrapper>
            <section className={classes.root}>
                <MDEditor.Markdown source={blog.content || ''} />
            </section>
        </Wrapper>
    )
};

export default BlogPage;

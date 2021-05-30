import React, { useContext } from 'react';
import MDEditor from '@uiw/react-md-editor';

import { GlobalContext } from '../context/GlobalState';
import { useParams } from "react-router-dom";
import Wrapper from './templates/HeaderWrapper';
import { Typography } from '@material-ui/core';

const BlogPage = () => {
    const { title } = useParams();
    const { blog_posts = [] } = useContext(GlobalContext);
    const blog = blog_posts.find( blog => blog._id === title);
    console.log('blog: ', blog);

    return (
        <Wrapper>
            <MDEditor.Markdown source={blog.content || ''} />
        </Wrapper>
    )
};

export default BlogPage;

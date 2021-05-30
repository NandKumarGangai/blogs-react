import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Wrapper from './templates/HeaderWrapper';
import BlogCard from '../components/BlogCard';

import { GlobalContext } from '../context/GlobalState';
// import { APIS } from '../serviceCalls';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const HomePage = () => {
    const classes = useStyles();
    // const [blogPosts, setBlogPosts] = React.useState([]);

    const { blog_posts = [], getBlogPosts } = useContext(GlobalContext);

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await APIS.getAllBlogPosts();
        //     setBlogPosts(response.posts || []);
        //     console.log('----: ', response.posts)
        // };

        // fetchData();
        getBlogPosts();

        return () => { }
    }, []);

    return (
        <Wrapper>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                        blog_posts.map( post =>
                            <BlogCard key={post._id} { ...post} />
                        )
                    }
                    
                    {/* <BlogCard></BlogCard>
                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>


                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard>

                    <BlogCard></BlogCard> */}
                </Grid>
            </div>
        </Wrapper>
    )
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { blogCard } from '../../constants/appConstants';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        height: '100%',
        '&:hover': {
            boxShadow: '0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        }
    },
    media: {
        height: 250,
    },
    btn: {
        textDecoration: 'none',
    }
});

const BlogCard = ({ _id, title, sub_title = '', thumbnailURL }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={thumbnailURL}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        {
                            sub_title
                                ? (<Typography variant="body2" color="textSecondary" component="p">
                                    {sub_title}
                                </Typography>)
                                : null
                        }
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/blog/${_id}`}>
                        <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                        >
                            {blogCard.LEARN_MORE_BTN_TEXT}
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default BlogCard;

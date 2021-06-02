import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}));

const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Loading....</h1>
        </div>
    )
}

export default Loading

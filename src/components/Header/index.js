import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { header } from '../../constants/appConstants';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    toolBar: {
        padding: '0 10rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0',
        },
    },
    btn: {
        color: 'white'
    }
}));

const Header = ({ admin = false }) => {
    const classes = useStyles();

    /** Show below sections on admin is available */
    const isAdmin = admin;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    {
                        isAdmin
                            ? (
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            )
                            : null
                    }
                    <Typography variant="h6" className={classes.title}>
                        {header.TITLE}
                    </Typography>
                    <Link to='/'>
                        <Button color="inherit" className={classes.btn} >{header.HOME_BTN_TEXT}</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;

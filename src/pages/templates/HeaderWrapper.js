import { makeStyles } from '@material-ui/core/styles';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import green from '@material-ui/core/colors/green';

import { Header, Footer } from '../../components';

const useStyles = makeStyles((theme) => ({
    children: {
        margin: '5rem 10%',
        marginBottom: '2rem',
        minHeight: 'calc(100vh - 5rem)',
        // borderLeft: '1px solid white',
        [theme.breakpoints.down('sm')]: {
            margin: '4rem 5%',
            minHeight: 'calc(100vh - 4rem)',
        },
        position: 'relative'
    },
    upIcon: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 2
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
}));

const HeaderWrapper = ({ children, admin = false }) => {
    const classes = useStyles();

    return (
        <>
            <Header admin={admin} />
            <main className={classes.children}>
                {children}
                <Fab className={`${classes.upIcon} ${classes.fabGreen}`} onClick={ e => { e.preventDefault(); window.scrollTo(0, 0); }}>
                    <UpIcon fontSize='large' />
                </Fab>
            </main>
            <Footer />
        </>
    )
};

export default HeaderWrapper;

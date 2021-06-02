import { makeStyles } from '@material-ui/core/styles';

import { Header } from '../../components';

const useStyles = makeStyles((theme) => ({
    children: {
        margin: '5rem 10%',
        marginBottom: '5rem',
        minHeight: 'calc(100vh - 5rem)',
        // borderLeft: '1px solid white',
        [theme.breakpoints.down('sm')]: {
            margin: '4rem 5%',
            minHeight: 'calc(100vh - 4rem)',
        },
    }
}));

const HeaderWrapper = ({ children, admin = false }) => {
    const classes = useStyles();

    return (
        <>
            <Header admin={admin} />
            <div className={classes.children}>
                {children}
            </div>
        </>
    )
};

export default HeaderWrapper;

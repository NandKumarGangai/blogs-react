import { Link as RLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { header, socialLinks } from '../../constants/appConstants';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        background: grey['900'],
        minHeight: '10rem',
        padding: '2rem 25%',
        color: '#eeeeee',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem 2rem',
        },
        position: 'relative'
    },
    hr: {
        marginTop: '0.5rem',
        height: '0.5px'
    },
    header: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            textAlign: 'center'
        },
    },
    footerContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    socials: {
        padding: '1rem',
        paddingLeft: '0',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
        },
    },
    icon: {
        padding: '1rem',
        paddingLeft: '0',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
        },
    },
    bottomNav: {
        paddingRight: '2rem',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    btn: {
        color: 'white'
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <div>
                <h1 className={classes.header}>Nandkumar Gangai's Blog</h1>
                <hr className={classes.hr} />
            </div>
            <div className={classes.footerContent}>
                <div className={classes.socials}>
                    <Link href={socialLinks.LINKEDIN} target='_blank'>
                        <span className={classes.icon}>
                            <LinkedInIcon fontSize='large' />
                        </span>
                    </Link>
                    <Link href={socialLinks.GITHUB} target='_blank'>
                        <span className={classes.icon}>
                            <GitHubIcon fontSize='large' />
                        </span>
                    </Link>
                    <Link href={socialLinks.TWITTER} target='_blank'>
                        <span className={classes.icon}>
                            <TwitterIcon fontSize='large' />
                        </span>
                    </Link>
                    <Link href={socialLinks.INSTAGRAM} target='_blank'>
                        <span className={classes.icon}>
                            <InstagramIcon fontSize='large' />
                        </span>
                    </Link>
                </div>
                <div className={classes.bottomNav}>
                    <RLink to='/'>
                        <Button color="inherit" className={classes.btn} >{header.HOME_BTN_TEXT}</Button>
                    </RLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

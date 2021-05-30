import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0),
        width: '75%'
    },
    formLabel: {
        padding: '0.5rem 0'
    }
}));

const MarkDownEditor = ({ id, label, formik }) => {
    const classes = useStyles();

    return (
        <FormControl
            component="span"
            error={formik.touched[id] && Boolean(formik.errors[id])}
            className={classes.formControl}
        >
            <div>
                {/* <FormLabel component="legend" className={classes.formLabel} >{label}</FormLabel> */}
                <TextField
                    id={id}
                    name={id}
                    label={label}
                    type="date"
                    fullWidth
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    aria-label={label}
                    value={formik.values[id]}
                    onChange={formik.handleChange}
                    error={formik.touched[id] && Boolean(formik.errors[id])}
                    helperText={formik.touched[id] && formik.errors[id]}
                />
            </div>
        </FormControl>
    )
}

export default MarkDownEditor;

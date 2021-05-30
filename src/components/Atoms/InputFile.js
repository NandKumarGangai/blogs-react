import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0),
        width: '75%',
    },
    textField: {
        border: '1px solid #666',
        borderRadius: '4px',
        padding: '12px',
        '&:hover': {
            border: '1px solid',
        }
    },
    borderRed: {
        border: '1px solid red',
    }
}));

const MarkDownEditor = ({ id, label, formik }) => {
    const classes = useStyles();

    return (
        <FormControl
            component="span"
            error={Boolean(formik.errors[id])}
            className={classes.formControl}
        >
            <div>
                <FormLabel component="legend" className={classes.formLabel} >{label}</FormLabel>
                <Input
                    id={id}
                    name={id}
                    label={label}
                    type="file"
                    accept='image/*'
                    fullWidth
                    className={`${classes.textField} ${formik.touched[id] && Boolean(formik.errors[id]) ? classes.borderRed : ""}`}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    aria-label={label}
                    onChange={e => formik.setFieldValue(id, e.target.files[0])}
                />
                {
                    formik.touched[id] && Boolean(formik.errors[id])
                        ? <FormHelperText>{formik.touched[id] && formik.errors[id]}</FormHelperText>
                        : null
                }
            </div>
        </FormControl>
    )
}

export default MarkDownEditor;

import MDEditor from '@uiw/react-md-editor';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(0),
        width: '100%'
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
                <FormLabel component="legend" className={classes.formLabel} >{label}</FormLabel>
                <MDEditor
                    height={'50vh'}
                    value={formik.values[id]}
                    onChange={(data) => { formik.setFieldValue(id, data)}}
                    preview={'edit'}
                />
                {/* Future scope */}
                {
                    false ?
                    (
                        <MDEditor.Markdown source={formik.values[id]} />
                    ) : null
                }
            </div>
            {
                formik.touched[id] && Boolean(formik.errors[id])
                    ? <FormHelperText>{formik.touched[id] && formik.errors[id]}</FormHelperText>
                    : null
            }
        </FormControl>
    )
}

export default MarkDownEditor;

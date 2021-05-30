import TextField from '@material-ui/core/TextField';

const InputTextField = ({ formik, id, label, classNames='' }) => {
    return (
        <TextField
            classNames={classNames}
            autoComplete=''
            name={id}
            variant='outlined'
            fullWidth
            id={id}
            label={label}
            aria-label={label}
            value={formik.values[id]}
            onChange={formik.handleChange}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={formik.touched[id] && formik.errors[id]}
        />
    )
}

export default InputTextField;

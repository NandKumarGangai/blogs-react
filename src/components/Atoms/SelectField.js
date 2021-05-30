import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
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

const SelectField = ({ formik, id, label, menuItems = [] }) => {
    const classes = useStyles();

    return (
        <FormControl
            variant="outlined"
            error={formik.touched[id] && Boolean(formik.errors[id])}
            className={classes.formControl}
        >
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                name={id}
                label={label}
                // autoWidth={false}
                // displayEmpty={false}
                value={formik.values[id]}
                onChange={e => formik.handleChange(e)}
            >
                {
                    menuItems.map(({ value, desc }, idx) => <MenuItem value={value} key={idx}>{desc}</MenuItem>)
                }
            </Select>
            {
                formik.touched[id] && Boolean(formik.errors[id])
                    ? <FormHelperText>{formik.touched[id] && formik.errors[id]}</FormHelperText>
                    : null
            }
        </FormControl>
    )
}

export default SelectField;

import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    card: {
        display: 'inline-block',
        color: '#414141',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
    },
    datePicker: {
        padding: theme.spacing(1, 1)
    },
    searchPicker: {
        '& > *': {
            margin: theme.spacing(5),
        },
        alignItems: 'center',
        textAlign: 'center'
    },
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(10, 10)
    }
}));

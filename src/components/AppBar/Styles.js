import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    navBar: {
        color: '#e10998'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));
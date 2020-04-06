import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  loader:{
    position: 'fixed',
    zIndex: 9999999999,
    height: '2em',
    width: '2em',
    overflow: 'visible',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    '&::before': {
      content: '""',
      zIndex: -9999999999,
      display: 'block',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0000005e',
    }
  },
}));
